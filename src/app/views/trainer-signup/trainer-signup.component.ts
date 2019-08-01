import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
declare var google; 
export class FormControl {
  stepLabel: string;
  stepIndex: number;
  totalSteps: number;
}

@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.scss']
})
export class TrainerSignupComponent implements OnInit {
  google;
  gender: SelectItem[];
  steps: MenuItem[];
  formControl: FormControl;
  type:'address';  //This value could be address | geocode | establishment
  countryRestrictions=['gr']; //If not set, default is ['us']
  autocompleteStyle = {
    'width':'100%',
    'font-size':'1.2em',
    'padding':'.5em .5em',
    'border-radius':'4px',
    'margin-bottom':'1em'
  };
  lat: number = 40.6400629;
  lng: number = 22.9444191;
  zoom:number = 12;

  constructor() { }

  ngOnInit() {
    this.formControl = new FormControl();
    this.formControl.totalSteps = 5;
    this.formControl.stepIndex = 0;
    this.formControl.stepLabel = 'Next Step';
    this.steps = [
      { label: 'Signup', command: () => { this.updateButtonStatus() } },
      { label: 'About You', command: () => { this.updateButtonStatus() } },
      { label: 'Location', command: () => { this.updateButtonStatus() } },
      { label: 'Social', command: () => { this.updateButtonStatus() } },
      { label: 'Finish', command: () => { this.updateButtonStatus() } }
    ];
    console.log(this.formControl.stepIndex)
  }

  onNextStep() {
    if (this.formControl.stepIndex < this.formControl.totalSteps - 1) {
      if (this.formControl.stepIndex == this.formControl.totalSteps - 2) {
        this.formControl.stepLabel = 'Signup';
      }
      this.formControl.stepIndex += 1;
      console.log(this.formControl.stepIndex, this.formControl.stepLabel)
    }
  }

  private updateButtonStatus() {
    if (this.formControl.stepIndex == this.formControl.totalSteps - 1) {
      this.formControl.stepLabel = 'Signup';
    } else {
      this.formControl.stepLabel = 'Next Step'
    }
  }

  onAddressChange(event:any){
    console.log(event)
    this.lat=event.location.lat;
    this.lng=event.location.lng;
    this.zoom = 15;
  }
}
