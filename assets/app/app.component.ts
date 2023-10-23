import { Component } from '@angular/core';  

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message = {
        content: 'to ficando fera no assunto',
        author: 'Vinicius'
    }
}