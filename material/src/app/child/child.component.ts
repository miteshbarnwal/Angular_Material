import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
// Second write here
export class ChildComponent implements OnInit {
  // Variable item is marked with @Input selector
  // This item is of string type which is going to be received from the parent
  @Input() item:string | undefined;
  // This child component is going to get this item from the parent
  @Output() newItemEvent= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  // Second write here for data flow from child to parent
  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

}
