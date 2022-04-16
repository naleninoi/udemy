import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponseData } from 'src/app/models/auth-response.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_KEY = 'AIzaSyB0-AXlNHslJ3GLt6fqz3rFq9UB4MvsXqM';

  SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY;

  SIGNIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.API_KEY;

  user = new Subject<User>();

  constructor(
    private http: HttpClient
  ) { }

  signup(email: string, password: string) {
    const requestPayload = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    return this.http.post<AuthResponseData>(this.SIGNUP_URL, requestPayload)
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const newUser = new User(resData.email, resData.localId, resData.idToken, expirationDate);
        this.user.next(newUser);
        console.log(newUser);
      }));
  }

  login(email: string, password: string) {
    const requestPayload = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    return this.http.post<AuthResponseData>(this.SIGNIN_URL, requestPayload)
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
      }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const newUser = new User(email, userId, token, expirationDate);
    this.user.next(newUser);
    console.log(newUser);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error!';
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email address exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
      case 'INVALID_PASSWORD':
      case 'USER_DISABLED':
        errorMessage = 'Bad credentials';
        break;
    }
    return throwError(errorMessage);
  }

}
