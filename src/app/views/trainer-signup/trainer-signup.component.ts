import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';

export class FormControl{
  stepLabel:string;
  stepIndex:number;
  totalSteps:number;
}

@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.scss']
})
export class TrainerSignupComponent implements OnInit {

  gender:SelectItem[];
  steps:MenuItem[];
  
  formControl:FormControl;
  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl();
    this.formControl.totalSteps=5;
    this.formControl.stepIndex=1;
    this.formControl.stepLabel=`Next Step`;

    this.steps=[
      {label: 'Registration'},
      {label: 'About You'},
      {label: 'Specialities'},
      {label: 'Social'},
      {label: 'Finish'}
    ];
    console.log(this.formControl.stepIndex)
  }

  onNextStep(){
    if(this.formControl.stepIndex < this.formControl.totalSteps){
      if(this.formControl.stepIndex == this.formControl.totalSteps -1){
        this.formControl.stepLabel=`Signup`;
      }
      this.formControl.stepIndex+=1;
      console.log(this.formControl.stepIndex,this.formControl.stepLabel)
    }
  }

}
