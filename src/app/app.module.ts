import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxSpinnerModule} from "ngx-spinner";

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
import { DropDownListComponent } from './components/ui/drop-down-list/drop-down-list.component';
import { FormHeaderComponent } from './components/forms/form-header/form-header.component';
import { FormFooterComponent } from './components/forms/form-footer/form-footer.component';
import { SignInFormComponent } from './components/forms/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/forms/sign-up-form/sign-up-form.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FormErrorMessageComponent } from './components/ui/form-error-message/form-error-message.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutMeFormComponent } from './components/forms/profile-forms/about-me-form/about-me-form.component';
import { StudyDataFormComponent } from './components/forms/profile-forms/study-data-form/study-data-form.component';
import { CvFormComponent } from './components/forms/profile-forms/cv-form/cv-form.component';
import { ChangePasswordComponent } from './components/forms/profile-forms/change-password/change-password.component';
import { TextareaComponent } from './components/ui/textarea/textarea.component';
import { IconComponent } from './components/ui/icon/icon.component';
import { ModalContainerComponent } from './components/modals/modal-container/modal-container.component';
import {DialogModule} from "@angular/cdk-experimental/dialog";
import {DialogCloseDirective} from "./directives/dialog-close.directive";
import { CoursesComponent } from './pages/courses/courses.component';
import { PracticalWorkCardComponent } from './components/cards/practical-work-card/practical-work-card.component';
import { PracticalWorkSectionComponent } from './components/sections/practical-work-section/practical-work-section.component';
import { SidebarPanelComponent } from './components/modals/sidebar-panel/sidebar-panel.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './components/modals/menu/menu.component';
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';
import { FileDownloadComponent } from './components/ui/file-download/file-download.component';
import { FileUploadComponent } from './components/ui/file-upload/file-upload.component';
import { InputDateComponent } from './components/ui/input-date/input-date.component';
import { SignPageContainerComponent } from './containers/sign-page-container/sign-page-container.component';
import { ProfileFormContainerComponent } from './containers/profile-form-container/profile-form-container.component';
import { ButtonWithIconComponent } from './components/ui/button-with-icon/button-with-icon.component';
import { SpinnerComponent } from './animation/spinner/spinner.component';

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
    DropDownListComponent,
    FormHeaderComponent,
    FormFooterComponent,
    SignInFormComponent,
    SignUpFormComponent,
    SigninComponent,
    FormErrorMessageComponent,
    ProfileComponent,
    AboutMeFormComponent,
    StudyDataFormComponent,
    CvFormComponent,
    ChangePasswordComponent,
    TextareaComponent,
    IconComponent,
    ModalContainerComponent,
    DialogCloseDirective,
    CoursesComponent,
    PracticalWorkCardComponent,
    PracticalWorkSectionComponent,
    SidebarPanelComponent,
    MenuComponent,
    LayoutContainerComponent,
    FileDownloadComponent,
    FileUploadComponent,
    InputDateComponent,
    SignPageContainerComponent,
    ProfileFormContainerComponent,
    ButtonWithIconComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

