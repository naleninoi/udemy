import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponseData } from 'src/app/models/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_KEY = 'AIzaSyB0-AXlNHslJ3GLt6fqz3rFq9UB4MvsXqM';

  SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.API_KEY;

  constructor(
    private http: HttpClient
  ) { }

  signup(email: string, password: string) {
    const requestPayload = {
      email: email,
      password: password,
      returnSecureToken: true
    };
    return this.http.post<AuthResponseData>(this.SIGNUP_URL, requestPayload);
  }

}
