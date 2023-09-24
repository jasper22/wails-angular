import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  currentData:string = '';

  constructor() {
    this.updateDate();
  }

  updateDate() {
    this.currentData = Date.now().toString()
    console.log(`update function running`)
  }
}
