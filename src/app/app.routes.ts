import { Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

export const routes: Routes = [
  {
    path: '',
    component: PageoneComponent,
  },
  {
    path: 'pageone',
    component: PageoneComponent,
  },
  {
    path: 'pagetwo',
    component: PagetwoComponent,
  },
  {
    path: '**',
    component: PagetwoComponent,
  },
];
