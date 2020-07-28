import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyersComponent } from './producehubComponent/buyers/buyers/buyers.component';
import { HomeComponent } from './producehubComponent/home/home/home.component';
import { ProduceListComponent } from './producehubComponent/produce/produce-list/produce-list.component';
import { ProduceDetailsComponent } from './producehubComponent/produce/produce-details/produce-details.component';
import { CreateProduceComponent } from './producehubComponent/produce/create-produce/create-produce.component';
import { ProduceUpdateComponent } from './producehubComponent/produce/produce-update/produce-update.component';
import { BuyerListComponent } from './producehubComponent/buyers/buyer-list/buyer-list.component';
import { PriceListComponent } from './producehubComponent/prices/price-list/price-list.component';
import { SupplierListComponent } from './producehubComponent/suppliers/supplier-list/supplier-list.component';
import { CreatePriceComponent } from './producehubComponent/prices/create-price/create-price.component';
import { BuyerDetailsComponent } from './producehubComponent/buyers/buyer-details/buyer-details.component';
import { CreateBuyerComponent } from './producehubComponent/buyers/create-buyer/create-buyer.component';
import { SupplierDetailsComponent } from './producehubComponent/suppliers/supplier-details/supplier-details.component';
import { CreateSupplierComponent } from './producehubComponent/suppliers/create-supplier/create-supplier.component';
import { PriceDetailsComponent } from './producehubComponent/prices/price-details/price-details.component';

const routes: Routes = [
  
  // {
  //   path: 'produce', redirectTo: 'producelist', pathMatch: 'full'
  // },
  // {
  //   path: 'produce/list', component: ProduceListComponent
  // },
  // {
  //   path: 'produce/details/:produceId', component: ProduceDetailsComponent
  // },
  // {
  //   path: 'produce/create', component: CreateProduceComponent
  // },
  // {
  //   path: 'produce/update/:produceId', component: ProduceUpdateComponent
  // }
  {
    path: '', component: HomeComponent
  },
  {
    path: 'produce', component: ProduceListComponent
  },
  {
    path: 'produce/:id', component: ProduceDetailsComponent
  },
  {
    path: 'createproduce', component: CreateProduceComponent
  },
  {
    path: 'buyers', component: BuyerListComponent
  },
  {
    path: 'buyers/:id', component: BuyerDetailsComponent
  },
  {
    path: 'createbuyers', component: CreateBuyerComponent
  },
  {
    path: 'prices', component: PriceListComponent
  },
  {
    path: 'prices/:id', component: PriceDetailsComponent
  },
  {
    path: 'createprices', component: CreatePriceComponent
  },
  {
    path: 'produce', component: ProduceListComponent
  },
  {
    path: 'supplierz', component: SupplierListComponent
  },
  {
    path: 'supplierz/:id', component: SupplierDetailsComponent
  },
  {
    path: 'createsupplier', component: CreateSupplierComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  BuyersComponent, HomeComponent, ProduceListComponent, ProduceDetailsComponent,CreateProduceComponent, ProduceUpdateComponent
]
