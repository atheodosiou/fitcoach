import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { TrainerSignupComponent } from './trainer-signup.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'

@NgModule({
    declarations:[TrainerSignupComponent],
    exports:[TrainerSignupComponent],
    imports:[
        CommonModule,
        FormsModule,
        InputTextModule,
        DropdownModule
    ],
    schemas:[NO_ERRORS_SCHEMA]
})
export class TrainerSignupModule{}