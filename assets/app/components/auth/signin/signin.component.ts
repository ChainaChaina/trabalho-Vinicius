import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_1.]+@[a-zA-Z0-91-1_1.]+'),
      ]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
