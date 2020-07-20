import { Component, OnInit } from '@angular/core';
import { MachinListService } from '../../../../shared/machin-list.service'
import { Observable } from 'rxjs'
import { DataSource } from '@angular/cdk/collections'
import {MachinModel } from '../../../../shared/machin-model.model'
@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

  dataSource = new MachinDataSource(this.machinListService)
  displayedColumns = ['name',
  'reference',
  'family',
  'state',
  'brand',
  'supplierName',
  'supplierContact',
  'serialNumber',
  'dateOfPurchase',
  'inventory',
  'ISBN',
  'department',
  'image',
  'comment'];

  constructor(private machinListService: MachinListService) { }

  ngOnInit(): void {
  }

}

export class MachinDataSource extends  DataSource<any> {

constructor(private machinListService: MachinListService ) {
  super();

}
connect(): Observable<MachinModel[]> {
  return this.machinListService.getMachin();
}



disconnect()  {}

}
