import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private myform: FormGroup;

  constructor( private formBuilder: FormBuilder, private http: HttpClient ) {
    this.myform = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required ]]
    });
  }

  ngOnInit() {
  }

  createCoach() {
    // this.myform.value to get value of form
    const dataToSend = this.myform.value;
    console.log(dataToSend);

    this.http.post(`https://morning-cove-04673.herokuapp.com/compet/registration_coache/`, dataToSend).toPromise().then(
      dataFromServer => {
        console.log(dataFromServer);
      }).catch( err => {
      console.log(err);
    });

  }

}
