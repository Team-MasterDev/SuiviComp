import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss', '../../../theme/global.scss'],
})
export class HomePage implements OnInit {

  title = 'Home';
  constructor() { }

  ngOnInit() {
  }

}
