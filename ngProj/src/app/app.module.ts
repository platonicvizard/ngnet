import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { App2Module } from './app2/app2.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    App2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
