import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  closeTagClicked: boolean = false;

  closeTag(e) {
    console.log('Close tag', e)
    this.closeTagClicked = true
  }
}
