import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FindTrainersComponent } from './find-trainers.component';

@NgModule({
    declarations:[FindTrainersComponent],
    exports:[FindTrainersComponent],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class FindTrainersModule{}