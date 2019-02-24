import { Injectable } from '@angular/core';
import { DonutsModel } from '../Models/donutsModel';

@Injectable()
export class BubleserviceService {

  public ArrayLand: DonutsModel[] = [];
  public ArrayRecord: DonutsModel[] =[];
  constructor() { }
}
