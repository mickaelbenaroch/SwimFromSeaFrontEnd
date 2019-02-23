import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { BuubleMapComponent } from './components/buuble-map/buuble-map.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BubblesComponent } from './components/bubbles/bubbles.component';

const appRoutes: Routes = [
  {path: '' , component: SliderComponent},
  { path: 'chart', component: ChartComponent },
  { path: 'bubbles', component: BubblesComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    BuubleMapComponent,
    BubblesComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes),
      ChartsModule,
      NgxChartsModule,
      BrowserAnimationsModule,
      HttpClientModule
  ], 
  providers: [],
  bootstrap: [AppComponent ]
  
})
export class AppModule { }
