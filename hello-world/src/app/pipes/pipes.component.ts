import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "RaHul drAvId";
  public person = {
    "firstName": "Rahul",
    "lastName": "Dravid"
  }
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
