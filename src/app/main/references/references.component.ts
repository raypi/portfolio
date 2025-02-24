import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

interface Reference {
  name: string;
  title: string;
  reference: string;
}

interface ReferenceTranslation {
  title: string;
  intro: string;
  list: Array<{
    name: string;
    title: string;
    reference: string;
  }>;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  translatedReferences: ReferenceTranslation | undefined;

  references: Reference[] = [
    { 
      name: 'V.Schuster', 
      title: 'references.list[0].title', 
      reference: 'references.list[0].reference' 
    },
    { 
      name: 'J. Müller', 
      title: 'references.list[1].title', 
      reference: 'references.list[1].reference' 
    },
    { 
      name: 'T.Webelein', 
      title: 'references.list[2].title', 
      reference: 'references.list[2].reference' 
    }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.get('references').subscribe((res: ReferenceTranslation) => {
      this.translatedReferences = res;
    });
    
  
  }
}

