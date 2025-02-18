import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Skill } from './skills.interface';




@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills: Skill[] = [
    { image: 'assets/img/Angular.png', name: 'Angular' },
    { image: 'assets/img/Typescript.png', name: 'TypeScript' },
    { image: 'assets/img/JavScript.png', name: 'JavaScript' },
    { image: 'assets/img/html.png', name: 'HTML' },
    { image: 'assets/img/css.png', name: 'CSS' },
    { image: 'assets/img/Firebase.png', name: 'Firebase' },
    { image: 'assets/img/Git.png', name: 'Git' },
    { image: 'assets/img/Scrum.png', name: 'Scrum' },
    { image: 'assets/img/Api.png', name: 'Rest-Api' },
    { image: 'assets/img/TestAutomation.png', name: 'Test Automation' },
    // { image: 'assets/img/Continuedlearning.png', name: 'Continued learning' },
  ];
}
