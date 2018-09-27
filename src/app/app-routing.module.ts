import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemsActiveComponent } from './items-active/items-active.component';
import { ItemsCompletedComponent } from './items-completed/items-completed.component';

const routes: Routes = [
  { path: 'items-completed', component: ItemsCompletedComponent },
  { path: 'items-ative', component: ItemsActiveComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
