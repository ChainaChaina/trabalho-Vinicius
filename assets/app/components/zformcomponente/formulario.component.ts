import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  @Output() inserir: EventEmitter<Person> = new EventEmitter();
  person: Person;

  enviar(): void {
    console.log(this.person);
    this.inserir.emit(this.person);
  }
}
