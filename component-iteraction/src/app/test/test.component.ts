import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  `
    <h2>{{"Hello "+ parentData}}</h2>
    <button (click)="fireEvent()">Launch Event</button>
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('hey this is R3')
  }
}
