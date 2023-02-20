import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isMenageMenuOpen = false;
  isDropdownMenuOpen = false;

  toggleMenageMenuhandler() {
    this.isMenageMenuOpen = !this.isMenageMenuOpen;
  }
  toggleIsDropdownMenuOpen() {
    this.isDropdownMenuOpen = !this.isDropdownMenuOpen;
  }
}
