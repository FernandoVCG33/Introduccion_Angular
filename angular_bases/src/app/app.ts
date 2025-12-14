import { Component, signal } from '@angular/core';
import {RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './pages/components/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,RouterLinkActive],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal(  'fernando Catacora');
}
