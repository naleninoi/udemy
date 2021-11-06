import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy';

  public pageToShow: string = 'recipes';

  onNavigate(link: string) {
    this.pageToShow = link;
  }
}
