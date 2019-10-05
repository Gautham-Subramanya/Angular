import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public employees = [
    {"id":1, "name":"Gautham", "age":230},
    {"id":2, "name":"Karthik", "age":300},
    {"id":3, "name":"Samarth", "age":20}
  ];

}
