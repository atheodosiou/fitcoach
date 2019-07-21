import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.scss']
})
export class TrainerSignupComponent implements OnInit {

  gender:SelectItem[];
  constructor() { }

  ngOnInit() {
    this.gender=[
      {label:'Male', value:'MALE'},
      {label:'Female', value:'FEMALE'},
      {label:'Neutral', value:'NEUTRAL'},
      {label:'Rather not say', value:'RATHER_NOT_SAY'}
    ];
  }

}
