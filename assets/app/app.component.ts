import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  inserir(person: Person) {
    console.log('Entrei no app componet');
    console.log(person);
  }
}
