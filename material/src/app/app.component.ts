import { Component } from '@angular/core';
// Fourth write here 
// and give this currentItem as  a value to the item property of app-child in app.component.html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';
  currentItem: string='Television';
  items=['item1','item2','item3','item4'];


  // code for child to aprent data flow
  addItem(newItem:string){
    this.items.push(newItem);
  }
}
