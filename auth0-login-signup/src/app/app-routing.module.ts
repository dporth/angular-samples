import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupAuthGuardService } from './login-signup-auth-guard.service';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { LoginComponent } from './login/login.component';
import { OauthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { ResourceComponent } from './resource/resource.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: LoginSignupComponent},
  { path: 'login-signup', component: LoginSignupComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'oauth/callback', component: OauthCallbackComponent, canActivate: [LoginSignupAuthGuardService] },
  { path: 'resource', component: ResourceComponent, canActivate: [LoginSignupAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
