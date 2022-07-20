import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {SigninComponent} from "./pages/signin/signin.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {CoursesComponent} from "./pages/courses/courses.component";
import {
  PracticalWorkSectionComponent
} from "./components/sections/practical-work-section/practical-work-section.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UserDetailsComponent} from "./components/forms/sign-up-forms/user-details/user-details.component";
import {EmailLetterComponent} from "./components/forms/sign-up-forms/email-letter/email-letter.component";
import {PasswordDetailsComponent} from "./components/forms/sign-up-forms/password-details/password-details.component";
import {ChoiceCourseComponent} from "./components/forms/sign-up-forms/choice-course/choice-course.component";

const signUpRoutes: Routes = [
  {path: '', component: UserDetailsComponent},
  {path: 'email', component: EmailLetterComponent},
  {path: 'password', component: PasswordDetailsComponent},
  {path: 'choice', component: ChoiceCourseComponent},
]

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    // children: signUpRoutes
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {
        path: ':id',
        component: PracticalWorkSectionComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
