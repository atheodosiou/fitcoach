import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'trainer-signup',component:WelcomeComponent},
  {path:'find-personal-trainers',component:WelcomeComponent},
  {path:'**',component:WelcomeComponent}
];

@NgModule({
  imports: [
    //Lazy routing
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations:[WelcomeComponent]
})
export class AppRoutingModule { }
