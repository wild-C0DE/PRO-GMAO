import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs"
import {WorkorderListService} from "../workorder-list.service"
import { Addwork} from "../../workorder/add/addwork.model"
import { DataSource } from '@angular/cdk/table';
@Component({
  selector: 'app-workorderlist',
  templateUrl: './workorderlist.component.html',
  styleUrls: ['./workorderlist.component.css']
})
export class WorkorderlistComponent implements OnInit {
  dataSource = new AddWorkOrderData (this.add);
  
  displayedColumns = ["numberOrder" , "date","nameOfTheIntervention",
  "typeOfIntervention","state","machine","manager","agent","depertment",
"duration","equipmentUsed"]
constructor(public add : WorkorderListService) { }
  ngOnInit(): void {
    console.log("im here")
  }

}
export class AddWorkOrderData extends DataSource<any>{
  constructor(public add : WorkorderListService ){
    super()
  }
  connect():Observable<Addwork[]>{
    console.log("help")
    return this.add.getData()
  }
  disconnect(){}
}