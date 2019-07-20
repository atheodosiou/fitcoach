import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.scss']
})
export class MainNavBarComponent implements OnInit {

  @Input() menu:MenuItem[]=[]

  
  constructor() { }
  
  ngOnInit() {
  }

}
