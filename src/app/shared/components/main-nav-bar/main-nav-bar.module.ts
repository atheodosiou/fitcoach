import { NgModule } from '@angular/core';
import { MainNavBarComponent } from './main-nav-bar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[MainNavBarComponent],
  exports:[MainNavBarComponent],
  imports:[
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class MainNavBarModule{}