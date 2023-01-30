import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  showMobileMenu()  {
    let menuButton = document.querySelector('#menu-btn')
    menuButton.classList.add('d-none')
    console.log("test")
  }
}
