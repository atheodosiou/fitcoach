import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  menu:MenuItem[];

  ngOnInit(){
    this.menu = [
      {label:'Find a personal trainer'},
      {label:'Become a trainer'}
    ];
  }
}
