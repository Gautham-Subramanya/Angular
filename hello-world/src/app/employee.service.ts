import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees () {
    return [
      {"id":1, "name":"Gautham", "age":230},
      {"id":2, "name":"Karthik", "age":300},
      {"id":3, "name":"Samarth", "age":20}
    ];
  }

}
