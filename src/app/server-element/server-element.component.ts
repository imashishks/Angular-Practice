import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  
  @Input('sv') element:{type:string,name:string ,  content:string}
  constructor() { }

  ngOnInit() {
  }
  
}
