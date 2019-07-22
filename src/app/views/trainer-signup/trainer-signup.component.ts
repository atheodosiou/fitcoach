import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    this.formControl.stepIndex=0;
    this.formControl.stepLabel='Next Step';

    this.steps=[
      {label: 'Signup',command:()=>{this.updateButtonStatus()}},
      {label: 'About You',command:()=>{this.updateButtonStatus()}},
      {label: 'Specialities',command:()=>{this.updateButtonStatus()}},
      {label: 'Social',command:()=>{this.updateButtonStatus()}},
      {label: 'Finish',command:()=>{this.updateButtonStatus()}}
    ];
    console.log(this.formControl.stepIndex)
  }

  onNextStep(){
    if(this.formControl.stepIndex < this.formControl.totalSteps - 1){
      if(this.formControl.stepIndex == this.formControl.totalSteps -2){
        this.formControl.stepLabel='Signup';
      }
      this.formControl.stepIndex+=1;
      console.log(this.formControl.stepIndex,this.formControl.stepLabel)
    }
  }

  private updateButtonStatus(){
    if(this.formControl.stepIndex == this.formControl.totalSteps -1){
      this.formControl.stepLabel='Signup';
    }else{
      this.formControl.stepLabel='Next Step'
    }
  }
}
