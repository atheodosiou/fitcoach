import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TrainerSignupComponent } from './views/trainer-signup/trainer-signup.component';
import { FindTrainersComponent } from './views/find-trainers/find-trainers.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'trainer-signup',component:TrainerSignupComponent},
  {path:'find-personal-trainers',component:FindTrainersComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [
    //Lazy routing
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations:[WelcomeComponent,TrainerSignupComponent,FindTrainersComponent,PageNotFoundComponent]
})
export class AppRoutingModule { }
