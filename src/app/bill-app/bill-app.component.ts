import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bill-app',
  templateUrl: './bill-app.component.html',
  styleUrls: ['./bill-app.component.css']
})
export class BillAppComponent implements OnInit {

  regForm:FormGroup;
  educationArray:FormArray;
  constructor() { }

  ngOnInit() {
    this.educationArray=new FormArray([new FormGroup({
      name:new FormControl(),
      price:new FormControl(),
      qty:new FormControl(),
      amount:new FormControl()
      

    })]);

    this.regForm=new FormGroup({
      name: new FormControl(),
      number: new FormControl(), 
      result:new FormControl(), 
      
      educations:this.educationArray
    });
  }

  onSubmit(){
    console.log(this.regForm.value);  
}
addEdu(){
  this.educationArray.push(new FormGroup({
      name:new FormControl(),
      price:new FormControl(),
      qty:new FormControl(),
      amount:new FormControl()
  }));
}
clear(){
  this.regForm.reset();
}
}