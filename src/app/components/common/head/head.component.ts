import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  collapsed = true;
  
  constructor(
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}
