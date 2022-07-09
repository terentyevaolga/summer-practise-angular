import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeaderComponent} from "./components/header/header.component";
import {ButtonComponent} from "./components/ui/button/button.component";
import {CourseCardComponent} from "./components/cards/course-card/course-card.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MainComponent} from "./pages/main/main.component";
import {InputComponent} from "./components/ui/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MultistepFormComponent } from './containers/multistep-form/multistep-form.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import { DropDownListComponent } from './components/ui/drop-down-list/drop-down-list.component';
import { SignUpFormComponent } from './containers/sign-up-form/sign-up-form.component';
import { FormHeaderComponent } from './components/forms/form-header/form-header.component';
import { FormFooterComponent } from './components/forms/form-footer/form-footer.component';
import { PasswordInputComponent } from './components/ui/password-input/password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    InputComponent,
    MainComponent,
    SignupComponent,
    CourseCardComponent,
    MultistepFormComponent,
    DropDownListComponent,
    SignUpFormComponent,
    FormHeaderComponent,
    FormFooterComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

