import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'
import {MachinModel} from './machin-model.model'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class MachinListService {

  private serviceUrl="http://localhost:8080/api/machineList"
  constructor(private http: HttpClient ) { }

  getMachin() : Observable<MachinModel[]>{
    return this.http.get<MachinModel[]>(this.serviceUrl)
  }
}
