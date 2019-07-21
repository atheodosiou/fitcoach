import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.scss']
})
export class TrainerSignupComponent implements OnInit {

  gender:SelectItem[];
  steps:MenuItem[];
  constructor() { }

  ngOnInit() {
    this.gender=[
      {label:'Male', value:'MALE'},
      {label:'Female', value:'FEMALE'},
      {label:'Neutral', value:'NEUTRAL'},
      {label:'Rather not say', value:'RATHER_NOT_SAY'}
    ];
    this.steps=[
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'},
      {label: 'Step 4'},
      {label: 'Step 5'}
    ];
  }

}
