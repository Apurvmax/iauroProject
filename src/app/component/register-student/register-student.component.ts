import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTable} from '@angular/material';
@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  firstName:string;
  lastName:string;
  address:string;
  email:string;
  gender:string;
  dataSource = [];
  displayedColumns=['First Name','Last Name','Address','Email','Gender']
  @ViewChild(MatTable) table:MatTable<any>;
  constructor() { }
   
  ngOnInit() {
  }
  onSubmit(f)
  {
    console.log("The Form value is",f);
    this.dataSource.push(f);
    this.table.renderRows();
  }
}
