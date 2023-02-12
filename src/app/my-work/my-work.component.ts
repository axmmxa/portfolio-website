import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
 
  jsScript = false
  angular = false

  allButton = true
  angularButton = false
  jsButton = false

  showAll(){
    this.allButton = true
    this.angularButton = false
    this.jsButton = false
    this.jsScript = false
    this.angular = false
  }

  showAngular() {
    this.angularButton = true
    this.allButton = false
    this.jsButton = false
    this.jsScript = true
    this.angular = false
  }

  showJavascript() {
    this.jsButton = true
    this.allButton = false
    this.angularButton = false
    this.angular = false
    this.angular = true
    this.jsScript = false
  }
}
