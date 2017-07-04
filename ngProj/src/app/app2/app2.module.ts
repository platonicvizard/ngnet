import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App2RoutingModule } from './app2-routing.module';
import { A2AboutComponent } from './a2-about/a2-about.component';

@NgModule({
  imports: [
    CommonModule,
    App2RoutingModule
  ],
  declarations: [A2AboutComponent]
})
export class App2Module { }
