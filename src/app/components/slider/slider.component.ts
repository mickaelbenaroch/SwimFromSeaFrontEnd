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
  public secondGallery: boolean = false;
  public thirdGallery: boolean = false;
  public firstPage: boolean;
  public secondPage: boolean;

  constructor() { }

  ngOnInit() {
    this.firstPage = true;
 
    let videoPlayer = <HTMLVideoElement> document.getElementById("myVideo");
    videoPlayer.play();  
  
    // setTimeout(() => {
    //   this.firstGallery = false;
    //   this.secondGallery = true;
    // }, 4000);

    // setTimeout(() => {
    //   this.secondGallery = false;
    //   this.thirdGallery = true;
    // }, 8000);

    setTimeout(() => {
      this.firstTitle = true;
    }, 10000);

    setTimeout(() => {
      this.secondTitle = true;
      this.firstTitle = false;
    }, 13000);

    setTimeout(() => {
      this.thirdTitle = true;
      this.secondTitle = false;
    }, 15000);

    setTimeout(() => {
      this.firstPage = false;
      this.secondPage = true;
    }, 20000);
  }

  /**
   * Mix the desired array
   * @param arrayName 
   */
  public shakeArray(arrayName: string):string{
    if(arrayName == "images"){
        return this.images[Math.floor(Math.random() * this.images.length)];
    }else{
      return this.images2[Math.floor(Math.random() * this.images2.length)];
    }
  }
}
