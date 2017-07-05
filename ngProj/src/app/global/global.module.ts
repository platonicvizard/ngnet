import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalRoutingModule } from './global-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    CommonModule,
    GlobalRoutingModule
  ],
  declarations: [],
  providers: [
        AuthService,
        AuthGuard
    ],
})
export class GlobalModule { }
