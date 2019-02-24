import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent } from './components/chart/chart.component';
import { BubleserviceService } from './Services/bubleservice.service';
import { SliderComponent } from './components/slider/slider.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuubleMapComponent } from './components/buuble-map/buuble-map.component';

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
      HttpClientModule,
      SlideshowModule
  ], 
  providers: [BubleserviceService],
  bootstrap: [AppComponent ]
  
})
export class AppModule { }
