
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [],
    exports: [
        WelcomeComponent,
        ScrollToModule
    ]
})
export class WelcomeModule{}