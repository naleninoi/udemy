import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open')
  isOpened: boolean = false;

  constructor(
    ) { }

  @HostListener('click') toggleOpen() {
    this.isOpened = !this.isOpened;
  }

}
