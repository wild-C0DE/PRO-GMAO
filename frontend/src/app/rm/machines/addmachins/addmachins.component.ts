import { Component, OnInit } from '@angular/core';
import { MachinesService } from '../../../shared/machines.service'
import {NgForm } from '@angular/forms'
@Component({
  selector: 'app-addmachins',
  templateUrl: './addmachins.component.html',
  styleUrls: ['./addmachins.component.css'],
  providers: [MachinesService]
})
export class AddmachinsComponent implements OnInit {
showSuccessMessage: boolean;
serverErrorMessages: string
  constructor(public machinesService : MachinesService) { }

  ngOnInit(): void {

  }
  onSubmit(form : NgForm){
    this.machinesService.postData(form.value).subscribe(
      res => {
        this.showSuccessMessage =true
        setTimeout(() => this.showSuccessMessage = false,3000)
        this.resetForm(form)
      },
      err => {
        
          this.serverErrorMessages ="something went wrong. Please check your entry data"
        
      }
    )
      
    
  }
  resetForm(form: NgForm) {
    this.machinesService.selectedMachine = {
      name: "",
  reference: "",
  family: "",
  state: "",
  brand: "",
  supplierName: "",
  supplierContact: "",
  serialNumber: "",
  dateOfPurchase: "",
  inventory: "",
  ISBN: "",
  department: "",
  image: "",
    }
    form.resetForm();
    this.serverErrorMessages = "";
  }

}
