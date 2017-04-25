import {
  Component, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None // Optionally, allow external styles
})
export class AppComponent {
  title = 'Angular Deep Dive';
}
