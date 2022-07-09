import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {SigninComponent} from "./pages/signin/signin.component";

const routes: Routes = [
	{
		path: '',
		component: MainComponent
	},
	{
		path: 'signup',
		component: SignupComponent
	},
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
