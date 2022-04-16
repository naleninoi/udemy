import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  collapsed = true;

  private $user: Subscription;
  
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }


  ngOnInit(): void {
    this.$user = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user ? true : false;
      }
    );
  }

  ngOnDestroy(): void {
    this.$user.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
