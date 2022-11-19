import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-oauth-callback',
  templateUrl: './oauth-callback.component.html',
  styleUrls: ['./oauth-callback.component.css']
})
export class OauthCallbackComponent implements OnInit {
  // Handles the callback from oauth2
  // Responsible for consuming callback data such as the authorization code
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private messagesService: MessagesService,
    public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.handleRedirectCallback();
    this.auth.getAccessTokenSilently({ scope: 'offline_access openid profile', audience: 'http://localhost/', redirect_uri: 'http://localhost:4200/oauth/callback' });
    this.activatedRoute.queryParams.subscribe(params => {
      this.messagesService.add(`Bearer Token: ${params['code']}`);
    });
  }
}
