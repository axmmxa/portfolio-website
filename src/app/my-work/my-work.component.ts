import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {

  jsScript = false
  angular = false

  showAll(){
    console.log('test')
    this.jsScript = false
    this.angular = false
  }

  showAngular() {
    console.log('test')
    this.jsScript = true
    this.angular = false
  }

  showJavascript() {
    console.log('test')
    this.angular = true
    this.jsScript = false
  }
}
