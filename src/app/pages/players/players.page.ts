import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {from, Observable, throwError} from 'rxjs';
import {catchError, map, retry, switchMap, tap} from 'rxjs/operators';

import { AlertController } from '@ionic/angular'; // used to display Alerts


@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss', '../../../theme/forms-style.scss', '../../../theme/alerts.scss'],
})
export class PlayersPage implements OnInit {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  // tslint:disable-next-line:variable-name
  newLink_player: Observable<any>;

  title = 'Players';
  // this used to triger the validation process
  isSubmitted = false;
  // to control the message after creation of resources
  isCreated = false;
  // to control the error alert
  isError = false;

  private myform: FormGroup;



  constructor( private formBuilder: FormBuilder, private http: HttpClient , public alertController: AlertController) {
    this.myform = this.formBuilder.group({
      playerId: ['', [Validators.required,  Validators.minLength(3)]],
      badgeId: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  // Get access to form control
  get errorControl(){
    return this.myform.controls;
  }

  deleteSuccessAlert(){
    this.isCreated = false;
  }
  deleteErrorAlert(){
    this.isError = false;
  }

  logForm(){
    this.isSubmitted = true;
    console.log(this.myform.value);
    console.log(this.errorControl.playerId.errors?.required);
  }

  ngOnInit() {
  }
  // alert to show


  createPost() {
    // this.myform.value to get value of form
    const dataToSend = this.myform.value;

    this.http.post(`https://morning-cove-04673.herokuapp.com/compet/affect_badge`, dataToSend).toPromise().then(
      dataFromServer => {
        this.isCreated = true;
        console.log(dataFromServer);
        this.myform.reset();
      }).catch( err => {
        this.isError = true;
        console.log(err);
      });
  }
}
