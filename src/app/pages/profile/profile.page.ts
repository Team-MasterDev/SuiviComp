import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

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

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  log(){
    console.log('momo');
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigateByUrl('/', {replaceUrl: true});
  }



}
