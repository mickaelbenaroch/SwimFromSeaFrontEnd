import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public rightposition: string;
  public counter: number = 0;
  public firstTitle: boolean;
  public secondTitle: boolean;
  public thirdTitle: boolean;
  public firstPage: boolean;
  public secondPage: boolean;

  constructor() { }

  ngOnInit() {
    this.firstPage = true;
  
    setTimeout(() => {
      this.firstTitle = true;
    }, 10000);

    setTimeout(() => {
      this.secondTitle = true;
      this.firstTitle = false;
    }, 25000);

    setTimeout(() => {
      this.thirdTitle = true;
      this.secondTitle = false;
    }, 34000);

    setTimeout(() => {
      this.firstPage = false;
      this.secondPage = true;
    }, 46000);
  }
}
