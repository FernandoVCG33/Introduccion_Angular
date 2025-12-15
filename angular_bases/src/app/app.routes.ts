import { Routes } from '@angular/router';
//import {CounterPageComponents} from './pages/counter/counter-page.components';
import {HeroPageComponent} from './pages/hero/hero-page.component';
import {CounterPageComponents} from './pages/counter/counter-page.components';
import {BnhaComponent} from './pages/bnha/bnha';
import {BnhaNextComponent} from './pages/bnha copy/bnha-next-';

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
    path:'bnha',
    component:BnhaComponent,
  },
  {
    path:'bnha-next',
    component:BnhaNextComponent,
  },
  {
    path: '**',
    redirectTo:''
  },

];
