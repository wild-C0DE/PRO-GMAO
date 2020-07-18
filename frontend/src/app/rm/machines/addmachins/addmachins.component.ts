import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../../shared/machines.service'
@Component({
  selector: 'app-addmachins',
  templateUrl: './addmachins.component.html',
  styleUrls: ['./addmachins.component.css'],
  providers: [MachinesService]
})
export class AddmachinsComponent implements OnInit {

  constructor(public machinesService : MachinesService) { }

  ngOnInit(): void {

  }

}
