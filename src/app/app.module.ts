import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeModule } from './views/welcome/welcome.module';
import { MainNavBarModule } from './shared/components/main-nav-bar/main-nav-bar.module';
import { FindTrainersModule } from './views/find-trainers/find-trainers.module';
import { TrainerSignupModule } from './views/trainer-signup/trainer-signup.module';
import { PageNotFoundModule } from './views/page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainNavBarModule,
    // WelcomeModule,
    // FindTrainersModule,
    TrainerSignupModule,
    // PageNotFoundModule
  ],
  providers: [],
  //Here goes any componet which maybe should used in app component but thery are not referenced in the app.component.html!
  entryComponents:[], 
  bootstrap: [AppComponent]
})
export class AppModule { }
