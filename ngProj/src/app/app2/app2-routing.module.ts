import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { A2AboutComponent } from './a2-about/a2-about.component';

const routes: Routes = [
    { path: 'a2/about', component:A2AboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App2RoutingModule { }
