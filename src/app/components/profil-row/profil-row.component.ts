import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profil-row',
  templateUrl: './profil-row.component.html',
  styleUrls: ['./profil-row.component.scss'],
})
export class ProfilRowComponent implements OnInit {

  @Input() label;
  @Input() value;
  @Input() changePath;

  constructor() { }

  ngOnInit() {

    console.log();
  }


}
