
import { NgModule, Input } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule
    ],
    exports: [
        WelcomeComponent,
    ]
})
export class WelcomeModule{}