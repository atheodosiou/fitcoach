import { NgModule } from '@angular/core';
import { MainNavBarComponent } from './main-nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:[MainNavBarComponent],
  exports:[MainNavBarComponent],
  imports:[
    CommonModule,
    FormsModule
  ]
})
export class MainNavBarModule{}