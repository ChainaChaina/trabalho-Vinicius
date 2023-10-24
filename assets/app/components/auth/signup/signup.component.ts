import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstNameTS: new FormControl(null, Validators.required),
      lastNameTS: new FormControl(null, Validators.required),
      emailTS: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_1.]+@[a-zA-Z0-91-1_1.]+'),
      ]),
      passwordTS: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    
    console.log(this.myForm.value);
    // this.myForm.reset();
  }
}
