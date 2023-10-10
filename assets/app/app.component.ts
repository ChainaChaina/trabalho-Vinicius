import { Component, OnInit } from '@angular/core';
import { Person } from './models/person.model';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  inserir(person: Person) {
    console.log('Entrei no app componet');
    console.log(person);
  }
}
