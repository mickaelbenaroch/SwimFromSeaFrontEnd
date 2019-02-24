import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClient } from '@angular/common/http';
import { RecordModel } from '../../Models/recordmodel';
import { LandLockModel } from '../../Models/landlockmodel';
import { ResultModel } from '../../Models/resultmodel';
import { Router } from '@angular/router';
import { BubleserviceService } from '../../Services/bubleservice.service';
import { DonutsModel } from '../../Models/donutsModel';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

//#region Public Members
  public text1: boolean;
  public text2: boolean;
  public graph: boolean;
  public RecordsArray: RecordModel[] = [];
  public LandLockArray: LandLockModel[] = [];
  public resultArrayLand: ResultModel[] = [];
  public resultArrayRecord: ResultModel[] = [];
  public tempArray: string[] = [];

  view: any[] = [window.innerWidth, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel2 = 'Not LandLocked Countries';
  xAxisLabel = 'LandLocked Countries';
  showYAxisLabel = true;
  yAxisLabel = 'Medals';

  colorScheme = {
    domain: ['green']
  };

  colorScheme2 = {
    domain: ['red']
  };
  //#endregion

//#region COnstructor & Lifecycle Hooks
constructor(public httpservice: HttpClient,
            public router: Router,
            public bubleservice: BubleserviceService){

}

public ngOnInit(): void{
  this.GetData();
  this.text1 = true;
  setTimeout(() =>{
    this.text2 = true;
  },6000)

  setTimeout(() =>{
    this.text1 = false;
    this.text2 = false;
    this.graph = true;
    setTimeout(()=>{
      $(".ngx-charts-outer")[0].style.margin = "auto";
      $(".ngx-charts-outer")[1].style.margin = "auto";
      $("#firstGraph .axis g:first-child:first-child")[1].style.transform = "translate(0px, 74px)";
      $("#secondGraph .axis g:first-child:first-child")[1].style.transform = "translate(0px, 70px)";
    },100)
  },10000)
}
//#endregion

//#region Public Methods
/**
 * On select callback
 * @param event 
 */
public onSelect(event): void {
  console.log(event);
}

/**
 * Init arrays of data
 */
public GetData():void{
  this.httpservice.get("https://quiet-basin-91917.herokuapp.com/landlocknames").subscribe((res: LandLockModel[])=>{
    console.log(res);
    this.LandLockArray = res;
  },
  err =>{
    console.log(err);
  })
  this.httpservice.get("https://quiet-basin-91917.herokuapp.com/").subscribe((res: RecordModel[])=>{
    console.log(res);
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
      var newResult = new ResultModel();
      newResult.name = rec.country;
      newResult.value = Number(rec.medals);
      if(newResult.name.includes("Trinidad")){
        newResult.name = "Trinidad";
      }if(newResult.name.includes("Serbia")){
        newResult.name = "Serbia";
      }
      this.resultArrayRecord.push(newResult);
      this.tempArray.forEach(elem =>{
        if(elem == newResult.name){
          var ind = this.resultArrayRecord.indexOf(newResult);
          this.resultArrayRecord.splice(ind,1);
        }
      })
      this.resultArrayRecord.sort((a,b)=>{return b.value-a.value})
    })

    this.LandLockArray.forEach(land => {
      var newRes = new ResultModel();
      newRes.name = land.country;
      newRes.value = 0;
      if(this.tempArray.includes(land.country) && this.RecordsArray.find(r => r.country == land.country)){
        newRes.name = this.RecordsArray.find(r => r.country == land.country).country;
        newRes.value = Number(this.RecordsArray.find(r => r.country == land.country).medals);
      }
      if(newRes.name.includes("African")){
        newRes.name = "African Republic";
      }if(newRes.name.includes("Eswatini")){
        newRes.name = "Eswatini";
      }
      this.resultArrayLand.push(newRes);
      this.resultArrayLand.sort((a,b)=>{return b.value-a.value})
    });
  }, 
  err =>{
    console.log(err);
  })
}

/**
 * Move to next view
 */
public MoveToNextView():void{
  this.router.navigateByUrl('/bubbles');
}
//#endregion
}
