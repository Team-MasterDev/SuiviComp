import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss', '../../../theme/forms-style.scss'],
})
export class ChangepasswordPage implements OnInit {

  title = 'Password';
  //this used to triger the validation process
  isSubmitted = false;
  // my form group
  private myform: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myform = this.formBuilder.group({
      password: ['', [Validators.required,  Validators.minLength(3)]],
      passwordCheck: ['', [Validators.required, Validators.minLength(7)]]
    });

  }

  // Get access to form control
  get errorControl(){
    return this.myform.controls;
  }


  logForm(){
    this.isSubmitted = true;
    console.log(this.myform.value);
    console.log(this.errorControl.password.errors?.required);
  }

  ngOnInit() {
  }

}
