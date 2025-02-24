import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

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
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  myProjekts: Project[] = [
    {
      projekt: 'portfolio.join.projekt',
      skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      projectDescription: 'portfolio.join.projectDescription',
      links: { live: '#', github: '#' },
      img: 'assets/img/projectjoin.png'
    },
    {
      projekt: 'portfolio.elPolloLoco.projekt',
      skills: ['JavaScript', 'HTML', 'CSS'],
      projectDescription: 'portfolio.elPolloLoco.projectDescription',
      links: { live: '#', github: '#' },
      img: 'assets/img/projectelpolloloco.png'
    }
  ];
  

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
