import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {MultistepFormComponent} from "./containers/multistep-form/multistep-form.component";

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
    path: 'multi',
    component: MultistepFormComponent
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
