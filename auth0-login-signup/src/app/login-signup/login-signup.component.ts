import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthType } from '../auth-type';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  authType = AuthType;
  target: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getQueryParams();
  }

  getQueryParams(): void {
    this.target = this.route.snapshot.queryParams['target'] || '';
  }

  signup(): void {
    this.messagesService.add('Sign up clicked.')
    this.router.navigate(["/signup"], {
      queryParams: {
          target: this.target
      }
    });
  }

  login(): void {
    this.messagesService.add('Login clicked.')
    this.router.navigate(["/login"], {
      queryParams: {
          target: this.target
      }
    });
  }
}
