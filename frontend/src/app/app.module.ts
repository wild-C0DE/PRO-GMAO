import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RmComponent } from './rm/rm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RsComponent } from './rs/rs.component';
import { MainComponent } from './main/main.component';
import { MachinesComponent } from './rm/machines/machines.component';
import { EquipmentsComponent } from './rm/equipments/equipments.component';
import { StockComponent } from './rm/stock/stock.component';
import { WorkorderComponent } from './rm/workorder/workorder.component';
import { CreateaccountComponent } from './rm/createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    RmComponent,
    NavbarComponent,
    SidebarComponent,
    RsComponent,
    MainComponent,
    MachinesComponent,
    EquipmentsComponent,
    StockComponent,
    WorkorderComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
