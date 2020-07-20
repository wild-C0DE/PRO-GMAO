import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs"
import {WorkorderListService} from "./workorder-list.service"
import { Addwork} from "../workorder/add/addwork.model"
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})
export class WorkorderComponent implements OnInit {
   dataSource = new AddWorkOrderData (this.add);
  constructor(private add : WorkorderListService) { }
  displayedColumns = []
  ngOnInit(): void {
  }

}
export class AddWorkOrderData extends DataSource<any>{
  constructor(private add : WorkorderListService ){
    super()
  }
  connect():Observable<Addwork[]>{
    return this.add.getData()
  }
  disconnect(){}
}