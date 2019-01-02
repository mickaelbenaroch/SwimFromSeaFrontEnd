import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buuble-map',
  templateUrl: './buuble-map.component.html',
  styleUrls: ['./buuble-map.component.css']
})
export class BuubleMapComponent implements OnInit { 
  @Input() openMap: boolean;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      $('#mapcontainer').attr( 'opacity', '1');
      $('#mapcontainer').addClass('animated');
      $('#mapcontainer').addClass('rollIn');
      $('#mapcontainer').attr( 'animation-name', 'rollIn !important');
    },21000)
  }

}
