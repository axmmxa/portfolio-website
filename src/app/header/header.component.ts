import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  attachClass = true;

  showMobileMenu()  {
    console.log('test')
    if(this.attachClass == false){
      this.attachClass = true
    }else{
      this.attachClass = false
    }
    
  }

  toHome() {
    console.log("scroll test")
    document.getElementById("main").scrollIntoView({behavior: "smooth"});
  }

  toAbout() {
    document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
  }

  toMyWork() {
    document.getElementById("my-work").scrollIntoView({behavior: "smooth"});
  }
}