import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //this means we can access this file from anywhere
})
export class AuthenticationService {

  constructor() { }
  authenticate(user: string, password: string) { //It is a function which helps to authenticate the hardcorded values of username and password
    if (user === '12A1' && password === 'an12345' || user === '11B2' && password === 'ch12345' || user === '12A25' && password === 'va12345'||user === '11B2' && password === 'ch12345' || user === 'Admin' && password === 'admin1234') {
      //Session storage stores our values in the browser but it will delete when we close our browser
      sessionStorage.setItem('id',user);// here we set the values of user using session storage
   
      return true;
    }

    return false
  }
  isLogedIn() //This function helps to get our username from session storage and checks whether it is valid or not
  {
    let user = sessionStorage.getItem('id');
    if(user===null)
    { console.log('in '+user)
      return false}
    else 
    return true
  }
  logout() //This function helps to remove our username from session storage after pressing logout button
  {
    sessionStorage.removeItem('id')
  }
}
