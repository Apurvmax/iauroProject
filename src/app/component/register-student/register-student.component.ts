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
  selection = new SelectionModel<any>(true, []);
  showtable:boolean=true;
  displayedColumns=['select','First Name','Last Name','Address','Email','Gender']
  @ViewChild(MatTable) table:MatTable<any>;
  constructor() { }
   
  ngOnInit() {
  }
  onSubmit(f:NgForm)
  {
    this.showtable=false
    console.log("The Form value is",f);
    this.dataSource.push(f["value"]);
    this.table.renderRows();
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
      const copy = this.dataSource.slice()
      console.log("The Copy is",copy)
      // el.comment = comment;
      console.log("The Field to be updaetd ",element.firstName);
      element.firstName=updatedValue
      //this.dataSource.update(copy);
    }
    
  }
}
