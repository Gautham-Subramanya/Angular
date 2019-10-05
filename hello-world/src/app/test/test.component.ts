import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  template: `

      <button (click)="anotherClick()">Click here to see message sent from child to parent</button>

      {{"Another Message is " + anotherMessage}}

      <button (click)="btnClick()">Click to send data to child</button>

      <h2>{{"Hi " + parentData }}</h2>

      <h2>{{"Hi " + testData }}</h2>

      <h1>{{"Hello " + randomName }}</h1>

      <input #someInput type="text">
      <button (click)="displayText(someInput)">Display</button>

      <h2>Welcome {{name}}</h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name }}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{"Hello "+greetUser()}}</h2>
      <h1 class="text-success">Dravid</h1>
      <input type="text" value="Dravid">
      <input type="text" [disabled]=isDisabled>
      <h3 [class]="successClass">Dravid</h3>
      <h3 [class]="specialText">Dravid</h3>
      <h3 [class]="successClass" class="text-special">Dravid</h3>
      <h3 [class.text-danger]="hasError">Dravid</h3>
      <h2 [ngClass]="messageClasses">Rahul Sharad Dravid</h2>
      <h2 [style.color]="hasError ? 'red':'green' ">Style binding</h2>
      <h2 [style.color]="highlightColor">Style Binding 2</h2>
      <button (click)="buttonClicked($event)">Greet</button>
      {{message}}
      <input #inputtext type="text">
      <button (click)="logMessage(inputtext)">Log</button>
  `,
  styles:[`
      .text-success {
        color:green
      }
      .text-danger {
        color:red
      }
      .text-special {
        font-style:italic
      }
    `
  ]
})
export class TestComponent implements OnInit {

  @Input() public parentData;

  @Input() public testData;


  @Input() public randomName;


  @Output() public childEvent = new EventEmitter();


  @Output() public anotherEvent = new EventEmitter();


  @Input() public anotherMessage;


  public name = "Gautham";
  public  myId = 'testId';
  public isDisabled = true;
  public successClass = "text-success";
  public specialText="text-special";
  public hasError = false;

  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public highlightColor = "orange";
  public message = "";

  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
    },3000)
  }

  greetUser():string {
    return this.name;
  }

  buttonClicked() {
    console.log("EVENT IS ", event);
    this.message="Welcome Dravid";
  }

  logMessage(value) {
    console.log(value);
  }

  displayText(value) {
    console.log(value.value);
  }


  btnClick() {
    this.childEvent.emit("Hey Angular");
  }

  anotherClick() {
    this.anotherEvent.emit("Child to parent");
  }

  ngOnInit() {
  }

}
