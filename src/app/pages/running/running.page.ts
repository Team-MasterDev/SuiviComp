import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-running',
  templateUrl: './running.page.html',
  styleUrls: ['./running.page.scss', '../../../theme/alerts.scss'],
})
export class RunningPage implements OnInit {

  title = 'Create Running Course';
  // to control the message after creation of resources
  isCreated = false;
  // to control the error alert
  isError = false;

  // Handle the list of players
  listPlayers = [];

  private myform: FormGroup;

  constructor( private formBuilder: FormBuilder, private http: HttpClient , public alertController: AlertController) {
    this.myform = this.formBuilder.group({
      courseTitle: ['', [Validators.required,  Validators.minLength(3)]],
      courseDisc: ['', [Validators.required, Validators.minLength(7)]],
      players_Ids: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  deleteSuccessAlert(){
    this.isCreated = false;
  }
  deleteErrorAlert(){
    this.isError = false;
  }

  addPlayer(){
    this.listPlayers = this.listPlayers.reverse();
    this.listPlayers.push({ player_id : this.myform.value.players_Ids });
    this.listPlayers = this.listPlayers.reverse();
    this.myform.controls['players_Ids'].setValue('');
  }

  // This function used to delete a specific element of list
  deletePlayer(player){
    this.listPlayers.forEach( (item, index) => {
      if (item.player_id === player ) {
        console.log(player);
        this.listPlayers.splice(index, 1);
      }
    });
  }

  ngOnInit() {
  }

  createCourse(){
    this.myform.reset();
    this.listPlayers = [];
    console.log(this.myform.value);
  }

}
