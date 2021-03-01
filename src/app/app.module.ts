import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegisterDeliveryComponent } from './features/deliveries/register-delivery/register-delivery.component';
import { MaterialModule } from './shared/material.module';
import { DeliveriesComponent } from './features/deliveries/deliveries.component';
import { ListDeliveriesComponent } from './features/deliveries/list-deliveries/list-deliveries.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './features/login/login.component';
import { NavComponent } from './shared/nav/nav.component';
import { SupplyComponent } from './features/supply/supply.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './features/supply/charts/charts.component';
import { ChartDataPipe } from './shared/chart-data.pipe';
import { WarehousedetailsComponent } from './features/supply/warehousedetails/warehousedetails.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterDeliveryComponent,
        DeliveriesComponent,
        ListDeliveriesComponent,
        LoginComponent,
        NavComponent,
        SupplyComponent,
        ChartsComponent,
        ChartDataPipe,
        WarehousedetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        BrowserAnimationsModule,
        AngularFirestoreModule,
        MaterialModule,
        ReactiveFormsModule,
        NgxChartsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [RegisterDeliveryComponent],
})
export class AppModule {}
