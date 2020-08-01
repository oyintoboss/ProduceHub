import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CreateBuyerComponent } from './producehubComponent/buyers/create-buyer/create-buyer.component';
import { BuyerDetailsComponent } from './producehubComponent/buyers/buyer-details/buyer-details.component';
import { BuyerListComponent } from './producehubComponent/buyers/buyer-list/buyer-list.component';
import { BuyerUpdateComponent } from './producehubComponent/buyers/buyer-update/buyer-update.component';
import { CreatePriceComponent } from './producehubComponent/prices/create-price/create-price.component';
import { PriceDetailsComponent } from './producehubComponent/prices/price-details/price-details.component';
import { PriceListComponent } from './producehubComponent/prices/price-list/price-list.component';
import { CreateSupplierComponent } from './producehubComponent/suppliers/create-supplier/create-supplier.component';
import { SupplierDetailsComponent } from './producehubComponent/suppliers/supplier-details/supplier-details.component';
import { SupplierListComponent } from './producehubComponent/suppliers/supplier-list/supplier-list.component';
import { SupplierUpdateComponent } from './producehubComponent/suppliers/supplier-update/supplier-update.component';
import { HeaderComponent } from './producehubComponent/header/header/header.component';
import { FooterComponent } from './producehubComponent/footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CreateBuyerComponent,
    BuyerDetailsComponent,
    BuyerListComponent,
    BuyerUpdateComponent,
    CreatePriceComponent,
    PriceDetailsComponent,
    PriceListComponent,
    CreateSupplierComponent,
    SupplierDetailsComponent,
    SupplierListComponent,
    SupplierUpdateComponent,
    HeaderComponent,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,    
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
