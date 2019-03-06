import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTable,MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { copyAnimationEvent } from '@angular/animations/browser/src/render/shared';

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
  data=[];
  isDatavalid:boolean=true;
  selection = new SelectionModel<any>(true, []);
  showtable:boolean=true;
  displayedColumns=['select','First Name','Last Name','Address','Phone','Email','Gender']
  @ViewChild(MatTable) table:MatTable<any>;
  constructor() { }
   
  ngOnInit() {
  }
  onSubmit(f:NgForm)
  {
    this.showtable=false
    console.log("The Form value is",f);
    console.log("The phone number is",f["value"]["phone"]);
    console.log("The DataSource is",this.dataSource);

    this.dataSource.forEach((element)=>{
      this.isDatavalid=true;
      if(element["phone"]===f["value"]["phone"])
      {
        if (confirm("Duplicate Record is not allowed")) {
          this.isDatavalid=false;
          this.showtable=true;
          f.reset();
        } 
        else 
        {
          this.isDatavalid=false;
          this.showtable=true;
            console.log("The Cancel Button is Pressed");
        }      
      }
      
    })
    if(this.isDatavalid)
    {
      console.log("The DataSource is",this.dataSource);
      this.dataSource.push(f["value"]);
      this.table.renderRows();
    }
    f.reset();

    
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }
  enableSubmit(){
    this.showtable=true;
  }
  removeSelectedRows()
  {
    this.data=this.dataSource;
    this.selection.selected.forEach(item => {
      console.log("The data is",this.data);
     let index: number = this.data.findIndex(d => d === item);
     console.log("The Index is",index);
      console.log(this.data.findIndex(d => d!= item));
      console.log(this.data.splice(index,1));
      this.dataSource=[];
      for(let i=0;i<this.data.length;i++)
      {
        this.dataSource.push(this.data[i]);
      }
      

      
    });
    console.log("The Data After Deletion is",this.data,this.dataSource);
    this.selection = new SelectionModel<Element>(true, []);
  }
  update(element,el, updatedValue) {
    console.log("The Updated valeus are",el,updatedValue,'And the Object is',element);
    if(el === 'firstName')
    {
      
      if (updatedValue == null) { return; }
      // copy and mutate
      const copy = this.dataSource.slice();
      this.dataSource.forEach((elementData)=>{
        if(elementData.firstName===element.firstName)
        {
           elementData.firstName=updatedValue;
        }
      })
      console.log("The Copy is",copy)
    
      //this.dataSource.update(copy);
    }
    
  }
}
