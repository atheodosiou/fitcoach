
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [],
    exports: [
        WelcomeComponent,
        AngularFullpageModule
    ]
})
export class WelcomeModule{}