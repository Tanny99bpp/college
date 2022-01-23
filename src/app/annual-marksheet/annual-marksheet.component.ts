import { Student3 } from './../model/student3.model';
import { Component, OnInit } from '@angular/core';
import { Student1 } from '../model/student1.model';
import { Student2 } from '../model/student2.model';

@Component({
  selector: 'app-annual-marksheet',
  templateUrl: './annual-marksheet.component.html',
  styleUrls: ['./annual-marksheet.component.css']
})
export class AnnualMarksheetComponent implements OnInit {
  
  marks:any;
  constructor() { }

  ngOnInit(): void {
    this.setUser()
  }
  setUser()
  {
    let user = sessionStorage.getItem('id');
    if(user === '12A1')
    this.marks= new Student1()
    else if(user === '11B2')
    this.marks = new Student2()
    else if(user === '12A25')
    this.marks = new Student3()
  }

}
