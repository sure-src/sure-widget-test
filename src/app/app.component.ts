import {Component, ViewEncapsulation} from '@angular/core';
import SureWidget from 'sure-widget-x';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'sure-widget-test';
  constructor() {
    const w = new SureWidget('799f4725-af8d-4fc3-839b-853b50417df4', {openOnInit: true});
  }
}
