import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  @Output()
  linkWasClicked = new EventEmitter<string>();

  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLinkClicked(linkName: string) {
    this.linkWasClicked.emit(linkName);
  }

}
