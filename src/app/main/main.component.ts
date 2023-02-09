import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  toMyWork() {
    document.getElementById("my-work").scrollIntoView({behavior: "smooth"});
  }

  toContactMe() {
    document.getElementById("contact-me").scrollIntoView({behavior: "smooth"});
  }

  toMySkills() {
    document.getElementById("my-skills").scrollIntoView({behavior: "smooth"});
  }
}
