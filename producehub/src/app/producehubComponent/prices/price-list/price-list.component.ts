import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/shared/prices/prices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {

  prices: any;
  currentPrice = null;
  currentIndex = -1;
  name = '';
  
    constructor(private produceService: PricesService, private router: Router) { }
  
    ngOnInit() { 
        this.retrievePrices();
      }   
    
      retrievePrices(){
        this.produceService.getAll().subscribe(data => {
          this.prices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
      }
  
      refreshList() {
        this.retrievePrices();
        this.currentPrice = null;
        this.currentIndex = -1;
      }
  
      setActivePrice(price, index){
        this.currentPrice = price;
        this.currentIndex = index;
      }
  
      removeAllProduces() {
        this.produceService.deleteAll().subscribe(response => {
          console.log(response);
          this.retrievePrices();
        },
        error => {
          console.log(error);
        });
      }
  
      searchName() {
        this.produceService.findByName(this.name).subscribe(data => {
          this.prices = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
        );
      }
  
      deleteProduce() {
        this.produceService.delete(this.currentPrice.id).subscribe(response => {
          console.log(response);
          this.router.navigate(['/prices']);
        },        
        error => {console.log(error)});
      } 
}
