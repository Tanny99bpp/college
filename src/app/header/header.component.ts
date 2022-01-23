import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticate:AuthenticationService) { }
  isLogged()
  {
    let user = this.authenticate.isLogedIn()
    return user;
  }
  ngOnInit(): void {
    this.isLogged()
  }

}
