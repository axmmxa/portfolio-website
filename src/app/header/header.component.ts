import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  attachClass = false;

  showMobileMenu()  {
    console.log('test')
    if(this.attachClass == false){
      this.attachClass = true
    }else{
      this.attachClass = false
    }
    
  }
}