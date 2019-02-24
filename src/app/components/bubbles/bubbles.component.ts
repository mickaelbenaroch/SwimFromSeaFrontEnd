import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LandLockModel } from '../../Models/landlockmodel';
import { BubleModel } from '../../Models/bublemodel';
import { DonutsModel } from '../../Models/donutsModel';
import { DomainModel } from '../../Models/domainmodel';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements OnInit {

  //#region Public Members
  public conclusion: boolean = true;
  public slide: boolean;
  public pie: boolean;
  public finish: boolean;
  public imageSources: string[] = ['/assets/rowing.jpg','/assets/volley.jpg','/assets/kayak.jpg','/assets/diving.jpg','/assets/sailing.jpg','/assets/swimming.jpg','/assets/waterpolo.jpg'];
  public RecordsArray: BubleModel[] = [];
  public LandLockArray: LandLockModel[] = [];
  public resultArrayLand: DonutsModel[] = [];
  public resultArrayRecord: DonutsModel[] = [];
  public tempArray: string[] = [];
  view: any[] = [window.innerWidth, 400];
  // options
  showLegend = true;
  colorScheme = {
  domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#4db8ff','#ffff33','#1aff1a']
  };
  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  //#endregion
  
  //#region Constructor & Lifecycle Hooks
  constructor(public httpservice: HttpClient) { }

  public ngOnInit():void {
    this.GetData();
    setTimeout(()=>{
      this.conclusion = false;
      this.slide = true;
    },30000)

    setTimeout(()=>{
      this.slide = false;
      this.pie = true;
    },90000)
  }
//#endregion

//#region Public Methods
/**
 * Final slide
 */
  public MoveToConclusion():void{
    this.pie = false;
    this.finish = true;
  }

  /**
   * Init data arrays
   */
  public GetData():void{
    this.httpservice.get("https://quiet-basin-91917.herokuapp.com/landlocknames").subscribe(
      (res: LandLockModel[]) =>{
        this.LandLockArray = res;
      },
      err =>{
        console.log(err);
      }
    )
    this.httpservice.get("https://quiet-basin-91917.herokuapp.com/").subscribe(
      (res:BubleModel[]) =>{
        var newResult = new DonutsModel();
        var newResult1 = new DonutsModel();
        var newResult2 = new DonutsModel();
        var newResult3 = new DonutsModel();
        var newResult4 = new DonutsModel();
        var newResult5 = new DonutsModel();
        var newResult6 = new DonutsModel();
        newResult.name = "Beach-Volley-Ball";
        newResult1.name = "Diving";
        newResult2.name = "Rowing";
        newResult3.name = "Sailing";
        newResult4.name = "Swimming";
        newResult5.name = "Water-Polo";
        newResult6.name = "Other";
        var Dom1 = new DonutsModel();
        var Dom2 = new DonutsModel();
        var Dom3 = new DonutsModel();
        var Dom4 = new DonutsModel();
        var Dom5 = new DonutsModel();
        var Dom6 = new DonutsModel();
        var Dom7 = new DonutsModel();
        Dom1.name = "Beach-Volley-Ball";
        Dom2.name = "Diving";
        Dom3.name = "Rowing";
        Dom4.name = "Sailing";
        Dom5.name = "Swimming";
        Dom6.name = "Water-Polo";
        Dom7.name = "Other";

        this.RecordsArray = res;
          //join
          this.RecordsArray.forEach(record => {
            this.LandLockArray.forEach(land => {
              if(land.country == record.country || (land.country == "Uzbekistan" && record.country == "Uzbelistan")){
                console.log("bingo  " + land.country);
                this.tempArray.push(land.country);
              }
            });
          });
          //build final array
          this.RecordsArray.forEach(rec =>{
            newResult.value += rec.beachVolleyball;
            newResult1.value += rec.diving;
            newResult2.value += rec.rowing;
            newResult3.value += rec.sailing;
            newResult4.value += rec.swimming;
            newResult5.value += rec.waterPolo;
            newResult6.value += rec.other;
            

            this.tempArray.forEach(elem =>{
              if(elem == newResult.name){
                var ind = this.resultArrayRecord.indexOf(newResult);
                this.resultArrayRecord.splice(ind,1);
              }
            })
          })
            this.resultArrayRecord.push(newResult);
            this.resultArrayRecord.push(newResult1);
            this.resultArrayRecord.push(newResult2);
            this.resultArrayRecord.push(newResult3);
            this.resultArrayRecord.push(newResult4);
            this.resultArrayRecord.push(newResult5);
            this.resultArrayRecord.push(newResult6);
           
          this.LandLockArray.forEach(land => {
            if(this.tempArray.includes(land.country) && this.RecordsArray.find(r => r.country == land.country)){
              Dom1.value += this.RecordsArray.find(r => r.country == land.country).beachVolleyball;
              Dom2.value += this.RecordsArray.find(r => r.country == land.country).diving;
              Dom3.value += this.RecordsArray.find(r => r.country == land.country).rowing;
              Dom4.value += this.RecordsArray.find(r => r.country == land.country).sailing;
              Dom5.value += this.RecordsArray.find(r => r.country == land.country).swimming;
              Dom6.value += this.RecordsArray.find(r => r.country == land.country).waterPolo;
              Dom7.value += this.RecordsArray.find(r => r.country == land.country).other;
            }
          });
          this.resultArrayLand.push(Dom1);
          this.resultArrayLand.push(Dom2);
          this.resultArrayLand.push(Dom3);
          this.resultArrayLand.push(Dom4);
          this.resultArrayLand.push(Dom5);
          this.resultArrayLand.push(Dom6);
          this.resultArrayLand.push(Dom7);
      },
      err =>{
        console.log(err);
      }
    )
    console.log(this.resultArrayLand);
    console.log(this.resultArrayRecord);
  }
  //#endregion

}
