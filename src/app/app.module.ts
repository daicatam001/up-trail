import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
