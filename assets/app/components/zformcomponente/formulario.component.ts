import { Component, Input } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  @Input() pessoas: Array<Person> = [];
}
