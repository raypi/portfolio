import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Project {
  projekt: string;
  skills: string[];
  projectDescription: string;
  links: { live: string; github: string };
  img: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  myProjekts: Project[] = [
    {
      projekt: 'Join',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      projectDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      links: { live: '#', github: '#' },
      img: 'assets/img/projectjoin.png'
    },
    {
      projekt: 'El Pollo Loco',
      skills: ['JavaScript', 'HTML', 'CSS'],
      projectDescription: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken.',
      links: { live: '#', github: '#' },
      img: 'assets/img/projectelpolloloco.png'
    }
  ];

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
