import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
 
  jsScript = false
  angular = false

  allButton = false
  angularButton = false
  jsButton = false

  showAll(){
    this.allButton = true
    this.jsScript = false
    this.angular = false
  }

  showAngular() {
    this.angularButton = true
    this.jsScript = true
    this.angular = false
  }

  showJavascript() {
    this.jsButton = true
    this.angular = true
    this.jsScript = false
  }
}
