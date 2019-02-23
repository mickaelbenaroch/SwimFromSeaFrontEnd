import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buuble-map',
  templateUrl: './buuble-map.component.html',
  styleUrls: ['./buuble-map.component.css']
})
export class BuubleMapComponent implements OnInit { 

  //#region Public members
  @Input() openMap: boolean;
  //#endregion

  //#region  Constructor & lifecycle Hooks
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{
      $('#mapcontainer').attr( 'opacity', '1');
      $('#mapcontainer').addClass('animated');
      $('#mapcontainer').addClass('rollIn');
      $('#mapcontainer').attr( 'animation-name', 'rollIn !important');
    },21000)
  }
//#endregion

//#region Public Methods
  public MoveToNextView():void{
    this.router.navigateByUrl('/chart');
  }
//#endregion  
}
