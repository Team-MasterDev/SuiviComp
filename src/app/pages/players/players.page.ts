import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-players',
  templateUrl: './players.page.html',
  styleUrls: ['./players.page.scss', '../../../theme/global.scss'],
})
export class PlayersPage implements OnInit {
  title = 'Players';
  //this used to triger the validation process
  isSubmitted = false;
  private myform: FormGroup;



  constructor( private formBuilder: FormBuilder ) {
    this.myform = this.formBuilder.group({
      playerId: ['', [Validators.required,  Validators.minLength(3)]],
      badgeId: ['', [Validators.required, Validators.minLength(7)]]
    });
  }
  // Get access to form control
  get errorControl(){
    return this.myform.controls;
  }


  logForm(){
    this.isSubmitted = true;
    console.log(this.myform.value);
    console.log(this.errorControl.playerId.errors?.required);
  }

  ngOnInit() {
  }

}
