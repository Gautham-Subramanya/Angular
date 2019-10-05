import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public employees = [
    {"id":1, "name":"Gautham", "age":230},
    {"id":2, "name":"Karthik", "age":300},
    {"id":3, "name":"Samarth", "age":20}
  ];

}
