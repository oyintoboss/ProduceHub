import { Component, OnInit } from '@angular/core';
import { BuyersService } from 'src/app/shared/buyers/buyers.service';

@Component({
  selector: 'app-create-buyer',
  templateUrl: './create-buyer.component.html',
  styleUrls: ['./create-buyer.component.css']
})
export class CreateBuyerComponent implements OnInit {
  
  buyer = {
    buyerAddress: '',
    buyerFirstName: '',
    buyerLastName: '',
    buyerEmail: '',
    buyerPhoneNumber: '',
    buyerCity: '',
    buyerState: '',
    buyerCountry: '',
    isExisitingBuyer: false,
    isAgent: false,
    availabilityDate: '',
    purchasedDate: '',
    published: false
  };
  submitted = false;

  constructor(private buyerService: BuyersService) { }

  ngOnInit() {
  }

  saveBuyer(){
    const data = {
      buyerAddress: this.buyer.buyerAddress,
      buyerFirstName: this.buyer.buyerFirstName,
      buyerLastName: this.buyer.buyerLastName,
      buyerEmail: this.buyer.buyerEmail,
      buyerPhoneNumber: this.buyer.buyerPhoneNumber,
      buyerCity: this.buyer.buyerCity,
      buyerState: this.buyer.buyerState,
      buyerCountry: this.buyer.buyerCountry,
      isExisitingBuyer: this.buyer.isExisitingBuyer,
      isAgent: this.buyer.isAgent,
      availabilityDate: this.buyer.availabilityDate,
      purchasedDate: this.buyer.purchasedDate,
    };

    this.buyerService.create(data)
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

  newBuyer(){
    this.submitted = false;
    this.buyer = {
      buyerAddress: '',
      buyerFirstName: '',
      buyerLastName: '',
      buyerEmail: '',
      buyerPhoneNumber: '',
      buyerCity: '',
      buyerState: '',
      buyerCountry: '',
      isExisitingBuyer: true,
      isAgent: true,
      availabilityDate: '',
      purchasedDate: '',
      published: false
    };
  }


}
