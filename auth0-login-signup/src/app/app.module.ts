import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { SignupComponent } from './signup/signup.component';
import { OauthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { LogoutComponent } from './logout/logout.component';
import { ResourceComponent } from './resource/resource.component';
import { MessagesComponent } from './messages/messages.component';
import { environment } from 'src/environments/environment';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginSignupComponent,
    SignupComponent,
    OauthCallbackComponent,
    LogoutComponent,
    ResourceComponent,
    MessagesComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.auth.nativeDomain || '',
      clientId: environment.auth.nativeClientId || '',
      scope: 'offline_access openid profile',
      audience: environment.auth.apiAudience
    }),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
