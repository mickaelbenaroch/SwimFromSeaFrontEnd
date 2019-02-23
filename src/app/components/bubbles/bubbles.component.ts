import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.css']
})
export class BubblesComponent implements OnInit {

  public conclusion: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.conclusion = false;
    },10000)
  }

}
