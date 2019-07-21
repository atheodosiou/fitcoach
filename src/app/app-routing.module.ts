import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { TrainerSignupComponent } from './views/trainer-signup/trainer-signup.component';
import { FindTrainersComponent } from './views/find-trainers/find-trainers.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WelcomeModule } from './views/welcome/welcome.module';
import { TrainerSignupModule } from './views/trainer-signup/trainer-signup.module';
import { FindTrainersModule } from './views/find-trainers/find-trainers.module';
import { PageNotFoundModule } from './views/page-not-found/page-not-found.module';


// const routes: Routes = [
//   {
//     path:'',
//     loadChildren: () => import('./views/welcome/welcome.module').then(mod => mod.WelcomeModule)
//   },
//   {
//     path:'trainer-signup',
//     loadChildren: () => import('./views/trainer-signup/trainer-signup.module').then(mod => mod.TrainerSignupModule)
//   },
//   {
//     path:'find-personal-trainers',
//     loadChildren: () => import('./views/find-trainers/find-trainers.module').then(mod => mod.FindTrainersModule)
//   },
//   {
//     path:'**',
//     loadChildren: () => import('./views/page-not-found/page-not-found.module').then(mod => mod.PageNotFoundModule)
//   }
// ];

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'trainer-signup',component:TrainerSignupComponent
  },
  {
    path:'find-personal-trainers',component:FindTrainersComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];
@NgModule({
  imports: [
    //Lazy routing
    RouterModule.forRoot(routes),
    WelcomeModule,
    TrainerSignupModule,
    FindTrainersModule,
    PageNotFoundModule
  ],
  exports: [RouterModule],
  // declarations:[TrainerSignupComponent,FindTrainersComponent,PageNotFoundComponent]
})
export class AppRoutingModule { }
