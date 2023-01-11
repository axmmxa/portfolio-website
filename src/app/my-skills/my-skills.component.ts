import { Component } from '@angular/core';

import * as AOS from 'aos';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {

  ngOninit() {
    AOS.init();
  }
}
