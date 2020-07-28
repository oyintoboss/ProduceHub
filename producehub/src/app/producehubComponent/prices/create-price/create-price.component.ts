import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/shared/prices/prices.service';

@Component({
  selector: 'app-create-price',
  templateUrl: './create-price.component.html',
  styleUrls: ['./create-price.component.css']
})
export class CreatePriceComponent implements OnInit {
  
  currentPrice = {
    soldPrice: '',
    counterPrice: '',
    offerPrice: '',
    realTimePrice: '',
    createdDate: '',
    modifiedDate: '',    
    isPriceNegotiable: false,
    published: false
  };
  submitted = false;

  constructor(private priceService: PricesService) { }

  ngOnInit() {
  }

  savePrice(){
    const data = {
      soldPrice: this.currentPrice.soldPrice,
      counterPrice: this.currentPrice.counterPrice,
      offerPrice: this.currentPrice.offerPrice,
      realTimePrice: this.currentPrice.realTimePrice,
      createdDate: this.currentPrice.createdDate,
      modifiedDate: this.currentPrice.modifiedDate,
      isPriceNegotiable: false,
    };

    this.priceService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newPrice(){
    this.submitted = false;
    this.currentPrice = {
      soldPrice: '',
      counterPrice: '',
      offerPrice: '',
      realTimePrice: '',
      createdDate: '',
      modifiedDate: '',    
      isPriceNegotiable: false,
      published: false
    };
  }

}
