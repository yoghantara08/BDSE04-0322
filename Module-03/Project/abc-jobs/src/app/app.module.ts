import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { RegistrationConfirmationComponent } from './users/registration/registration-confirmation/registration-confirmation.component';
import { RegistrationConfirmationEmailComponent } from './users/registration/registration-confirmation-email/registration-confirmation-email.component';
import { SearchUsersComponent } from './pages/search-users/search-users.component';
import { ProfileUserComponent } from './pages/profile-user/profile-user.component';
import { UserAccountsService } from './user-accounts.service';
import { EditProfileComponent } from './pages/profile-user/edit-profile/edit-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ForgotPasswordConfirmationComponent } from './pages/forgot-password/forgot-password-confirmation/forgot-password-confirmation.component';
import { PublicProfileComponent } from './pages/profile-user/public-profile/public-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginFormComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationConfirmationComponent,
    RegistrationConfirmationEmailComponent,
    SearchUsersComponent,
    ProfileUserComponent,
    EditProfileComponent,
    ForgotPasswordComponent,
    ForgotPasswordConfirmationComponent,
    PublicProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule],
  providers: [UserAccountsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
