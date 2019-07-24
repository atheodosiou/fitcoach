import { NgModule } from '@angular/core';
import { TrainerSignupComponent } from './trainer-signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule} from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import {SliderModule} from 'primeng/slider';
import { GMapModule } from 'primeng/gmap';
@NgModule({
    declarations:[TrainerSignupComponent],
    exports:[TrainerSignupComponent],
    imports:[
        CommonModule,
        FormsModule,
        InputTextModule,
        DropdownModule,
        StepsModule,
        ButtonModule,
        RadioButtonModule,
        InputTextareaModule,
        MultiSelectModule,
        SliderModule,
        GMapModule
    ]
})
export class TrainerSignupModule{}