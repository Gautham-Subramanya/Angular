import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List 
    </h3>
    <ul class="items">
      <li (click) = "onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <h4>{{department.id}} {{department.name}}</h4>
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;

  departments =[
    {"id":1, "name":"Java"},
    {"id":2, "name":"Spring Boot"},
    {"id":3, "name":"ReactJS"},
    {"id":4, "name":"Angular"},
    {"id":5, "name":"Node"}
  ]

  constructor(private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })

  }

  onSelect (department) {
    // Absolute navigation
    // this.router.navigate(['/departments', department.id]);
    // Relative Navigation
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
