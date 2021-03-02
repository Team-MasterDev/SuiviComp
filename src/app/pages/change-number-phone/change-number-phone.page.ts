import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-change-number-phone',
  templateUrl: './change-number-phone.page.html',
  styleUrls: ['./change-number-phone.page.scss', '../../../theme/forms-style.scss', '../../../theme/global.scss'],
})
export class ChangeNumberPhonePage implements OnInit {

  title = 'Phone number';
  //this used to triger the validation process
  isSubmitted = false;
  // my form group
  private myform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myform = this.formBuilder.group({
      phone: ['', [Validators.required,  Validators.minLength(3)]],
    });

  }

  // Get access to form control
  get errorControl(){
    return this.myform.controls;
  }


  logForm(){
    this.isSubmitted = true;
    console.log(this.myform.value);
    console.log(this.errorControl.phone.errors?.required);
  }

  ngOnInit() {
  }

}
