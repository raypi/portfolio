import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Reference {
  name: string;
  title: string;
  reference: string;
}


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  references: Reference[] = [
    { name: 'V.Schuster', title: 'Team Partner', reference: 'Ray ist ein geiler Typ' },
    { name: 'J. Müller', title: 'Direktor', reference: 'Ray wer ist eigentlich Ray' },
    { name: 'T.Webelein', title: 'Team Partner', reference: 'Ray hat zwar eine rauhe Schale, aber einen weichen Kern' }
  ];

}
