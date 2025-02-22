import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './user-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProvaAngular';
}
