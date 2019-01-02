import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public rightposition: string;
  public counter: number = 0;
  public images: string[] = ['/assets/africa1.jpeg',
                             '/assets/africa2.jpeg',
                             '/assets/africa3.jpeg',
                             '/assets/africa4.jpeg',
                             '/assets/africa5.jpeg',
                             '/assets/africa6.jpeg',
                             '/assets/africa7.jpeg',
                             '/assets/africa8.jpeg',
                             '/assets/africa9.jpeg',
                            ];

  public images2: string[] = ['/assets/africa10.jpeg',
                              '/assets/africa11.jpeg',
                              '/assets/africa12.jpeg',
                              '/assets/africa13.jpeg',
                              '/assets/africa14.jpeg',
                              '/assets/africa15.jpeg',
                              '/assets/africa16.jpeg',
                              '/assets/africa17.jpeg',
                              '/assets/africa18.jpeg',
                            ];
  public imagesArray1: string[];
  public imagesArray2: string[];                          

  public firstTitle: boolean;
  public secondTitle: boolean;
  public thirdTitle: boolean;
  public firstGallery: boolean = true;
  public secondGallery: boolean = true;
  public firstPage: boolean;
  public secondPage: boolean;

  constructor() { }

  ngOnInit() {
    this.firstPage = true;
   setInterval(()=>{
      var rand1 = this.images[Math.floor(Math.random() * this.images.length)];
      var rand2 = this.images[Math.floor(Math.random() * this.images.length)];
      var rand3 = this.images[Math.floor(Math.random() * this.images.length)];
      this.imagesArray1 = [rand1, rand2, rand3]
      var rand4 = this.images[Math.floor(Math.random() * this.images.length)];
      var rand5 = this.images[Math.floor(Math.random() * this.images.length)];
      var rand6 = this.images[Math.floor(Math.random() * this.images.length)];
      this.imagesArray2 = [rand4, rand5, rand6]

   },3000)


    setTimeout(() => {
      this.firstGallery = false;
      this.firstTitle = true;
    }, 10000);

    setTimeout(() => {
      this.secondGallery = false;
      //this.firstTitle = false;
      this.secondTitle = true;
    }, 15000);

    setTimeout(() => {
      //this.secondTitle = false;
      this.thirdTitle = true;
      this.firstPage = false;
      this.secondPage = true;
    }, 20000);
  }

}
