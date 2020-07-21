import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MachinModel } from './machin-model.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MachinesService {
  selectedMachine: MachinModel = {
    name: '',
    reference: '',
    family: '',
    state: '',
    brand: '',
    supplierName: '',
    supplierContact: '',
    serialNumber: '',
    dateOfPurchase: '',
    inventory: '',
    ISBN: '',
    department: '',
    image: '',
    comment: '',
  };

  constructor(private http: HttpClient) {}

  postData(machin: any) {
    return this.http.post(environment.apiBaseUrl + '/addmachine', machin);
  }
}
