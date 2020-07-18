import { Injectable } from '@angular/core';
import { MachinModel } from './machin-model.model'

@Injectable({
  providedIn: 'root'
})
export class MachinesService {
  selectedMachine: MachinModel = {
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

  constructor() { }
}
