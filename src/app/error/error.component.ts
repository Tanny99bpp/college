import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Kindly contact at abc.support@abcimt.ac.in';
  constructor() { }

  ngOnInit(): void {
  }

}
