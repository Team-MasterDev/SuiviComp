import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.page.html',
  styleUrls: ['./change-email.page.scss', '../../../theme/forms-style.scss', '../../../theme/global.scss'],
})
export class ChangeEmailPage implements OnInit {

  title = 'Email ';
  //this used to triger the validation process
  isSubmitted = false;
  // my form group
  private myform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myform = this.formBuilder.group({
      email: ['', [Validators.required,  Validators.minLength(3), Validators.email]],
      emailCheck: ['', [Validators.required, Validators.minLength(7), Validators.email]]
    });

  }

  // Get access to form control
  get errorControl(){
    return this.myform.controls;
  }


  logForm(){
    this.isSubmitted = true;
    console.log(this.myform.value);
    console.log(this.errorControl.email.errors?.required);
  }

  ngOnInit() {
  }

}
