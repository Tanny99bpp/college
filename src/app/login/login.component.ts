import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = false;
  constructor(private router: Router, private authenticate: AuthenticationService) { }

  ngOnInit(): void {
  }
  submit() {
    if (this.authenticate.authenticate(this.username, this.password)) {
      console.log('logged In')
      if (this.username === 'Admin' && this.password === 'admin1234') {
        this.router.navigate(['admin']);
      }
      else {
        this.router.navigate(['annual_marksheet']);
      }
    }
    else
      this.errorMessage = true
  }
}
