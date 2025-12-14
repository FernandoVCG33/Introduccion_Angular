import { Routes } from '@angular/router';
//import {CounterPageComponents} from './pages/counter/counter-page.components';
import {HeroPageComponent} from './pages/hero/hero-page.component';
import {CounterPageComponents} from './pages/counter/counter-page.components';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponents,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: '**',
    redirectTo:''
  }
];
