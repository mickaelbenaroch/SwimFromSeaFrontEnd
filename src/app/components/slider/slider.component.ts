import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  //#region Public Members
  public rightposition: string;
  public counter: number = 0;
  public firstTitle: boolean;
  public secondTitle: boolean;
  public thirdTitle: boolean;
  public firstPage: boolean;
  public secondPage: boolean;
  //#endregion

  //#region Constructor & Lifecycle Hooks
  constructor() { }

  public ngOnInit():void {
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
    }, 44000);
  }
  //#endregion
}
