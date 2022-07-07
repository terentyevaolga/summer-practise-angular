import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
