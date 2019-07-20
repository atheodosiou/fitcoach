import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    declarations:[PageNotFoundComponent],
    exports:[PageNotFoundComponent],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class PageNotFoundModule{}