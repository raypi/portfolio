import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

interface Reference {
  name: string;
  title: string;
  reference: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

  // Analog zu myProjekts wird hier ein Array mit Translation-Schlüsseln definiert.
  myReferences: Reference[] = [
    { 
      name: 'references.schuster.name', 
      title: 'references.schuster.title', 
      reference: 'references.schuster.reference'
    },
    { 
      name: 'references.mueller.name', 
      title: 'references.mueller.title', 
      reference: 'references.mueller.reference'
    },
    { 
      name: 'references.webelein.name', 
      title: 'references.webelein.title', 
      reference: 'references.webelein.reference'
    }
  ];
}