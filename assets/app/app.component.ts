import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';
import { MessageService } from './services/message.service';
import { EmpregadoService } from './services/empregado.service';
import { Empregado } from './models/Empregado.model';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  providers: [MessageService, EmpregadoService],
})
export class AppComponent implements OnInit {
  
  empregado: Empregado = new Empregado("", 0); 

  constructor(private readonly empregadoService: EmpregadoService) {
  }

  ngOnInit(): void {}

  onEmpregadoServiceSave(): void {
   this.empregadoService.addEmpregado(this.empregado)
   this.empregado = new Empregado("", 0); 
  }
}
