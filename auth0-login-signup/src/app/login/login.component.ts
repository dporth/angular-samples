import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  target: string | undefined;
  
  constructor(private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.getQueryParams();
    this.login();
  }

  getQueryParams(): void {
    this.target = this.route.snapshot.queryParams['target'] || '';
  }

  login(): void {
    this.auth.loginWithRedirect(
      {
        redirect_uri: environment.auth.redirectUri,
        appState: {target: this.target},
        action: "login"
      }
    );
  }
}
