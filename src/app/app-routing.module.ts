import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {SignupComponent} from "./pages/sign-pages/signup/signup.component";
import {SigninComponent} from "./pages/sign-pages/signin/signin.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {
  PracticalWorkSectionComponent
} from "./components/sections/practical-work-section/practical-work-section.component";

const coursesRoutes: Routes = [
  {path: ':id', component: PracticalWorkSectionComponent}
]

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
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: coursesRoutes
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
