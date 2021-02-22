import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  title = 'Account';
<<<<<<< HEAD

  label = 'User name';
  value = 'James Warden';
  change = 'tabs';

=======
>>>>>>> 2e51579333d271bc8f0423ce052cb6ef3fb878df
  constructor() { }

  ngOnInit() {
  }

  log(){
    console.log('momo');
  }



}
