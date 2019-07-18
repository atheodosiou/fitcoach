import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './views/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule
  ],
  providers: [],
  //Here goes any componet which maybe should used in app component but thery are not referenced in the app.component.html!
  entryComponents:[], 
  bootstrap: [AppComponent]
})
export class AppModule { }
