import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  title = 'Account';

  label = 'User name';
  value = 'James Warden';
  change = 'tabs';

  constructor() { }

  ngOnInit() {
  }

  log(){
    console.log('momo');
  }



}
