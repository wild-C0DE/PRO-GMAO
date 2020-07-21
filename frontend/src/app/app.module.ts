//built-in imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

//*******components***********
//siw 
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ReactiveFormsModule } from '@angular/forms';
//siw 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RmComponent } from './rm/rm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RsComponent } from './rs/rs.component';
import { MainComponent } from './main/main.component';
import { MachinesComponent } from './rm/machines/machines.component';
import { EquipmentsComponent } from './rm/equipments/equipments.component';
import { StockComponent } from './rm/stock/stock.component';
import { WorkorderComponent } from './rm/workorder/workorder.component';
import { CreateaccountComponent } from './rm/createaccount/createaccount.component';

import { WorkOrderComponent } from './rm/workorder/work-order/work-order.component';
import { AddComponent } from './rm/workorder/add/add.component';
import { EnQueueComponent } from './rm/workorder/en-queue/en-queue.component';

import { MachinslistComponent } from './rm/machines/machinslist/machinslist.component';
import { AddmachinsComponent } from './rm/machines/addmachins/addmachins.component';
import { PreventionComponent } from './rm/machines/prevention/prevention.component';
import { CorrectionComponent } from './rm/machines/correction/correction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DatalistComponent } from './rm/machines/machinslist/datalist/datalist.component';

import { MachinListService } from './shared/machin/machin-list.service';
import {MachinesService} from "./shared/machines.service"


//*******services***********

import {AddworkService} from "./rm/workorder/add/addwork.service"
import {WorkorderListService} from "./rm/workorder/workorder-list.service"

@NgModule({
  declarations: [
    AppComponent,
    RmComponent,
    NavbarComponent,
    RsComponent,
    MainComponent,
    MachinesComponent,
    EquipmentsComponent,
    StockComponent,
    WorkorderComponent,
    CreateaccountComponent,
    WorkOrderComponent,
    AddComponent,
    EnQueueComponent,

    //siw
    HomeComponent,
    LoginComponent,
    //siw 

    MachinslistComponent,
    AddmachinsComponent,
    PreventionComponent,
    CorrectionComponent,
    DatalistComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],

  providers: [MachinListService,AddworkService,WorkorderListService, MachinesService,
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],

})
export class AppModule {}
