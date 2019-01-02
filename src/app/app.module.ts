import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { BuubleMapComponent } from './components/buuble-map/buuble-map.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BuubleMapComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent ]
  
})
export class AppModule { }
