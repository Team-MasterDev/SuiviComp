import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-changename',
  templateUrl: './changename.page.html',
  styleUrls: ['./changename.page.scss', '../../../theme/forms-style.scss', '../../../theme/global.scss'],
})
export class ChangenamePage implements OnInit {

  title = 'User name';
  //this used to triger the validation process
  isSubmitted = false;
  // my form group
  private myform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myform = this.formBuilder.group({
      username: ['', [Validators.required,  Validators.minLength(3)]],
    });

  }

  // Get access to form control
  get errorControl(){
    return this.myform.controls;
  }


  logForm(){
    this.isSubmitted = true;
    console.log(this.myform.value);
    console.log(this.errorControl.username.errors?.required);
  }

  ngOnInit() {
  }
}
