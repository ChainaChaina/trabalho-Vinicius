import { Component, Input } from '@angular/core';
import { Empregado } from '../../models/empregado.model';

@Component({
  selector: 'app-empregado',
  template: `<br />
    {{ emp.name }} - {{ emp.age }}`,
})
export class EmpregadoComponent {
  @Input() emp: Empregado;
}
