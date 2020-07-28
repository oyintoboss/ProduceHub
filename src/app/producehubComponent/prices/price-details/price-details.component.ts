import { Component, OnInit } from '@angular/core';
import { PricesService } from 'src/app/shared/prices/prices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-price-details',
  templateUrl: './price-details.component.html',
  styleUrls: ['./price-details.component.css']
})
export class PriceDetailsComponent implements OnInit {

  currentPrice = null;
  message = '';
  
    constructor(private priceService: PricesService, private route: ActivatedRoute, 
      private router: Router) { }
  
    ngOnInit() {
      this.message = '';
      this.getPrice(this.route.snapshot.paramMap.get('id'));
    }
    
    getPrice(id) {
      this.priceService.get(id).subscribe(data => {
        this.currentPrice = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
      );
    }
  
    updatePublished(status) {
      const data = {
        name: this.currentPrice.name,
        description: this.currentPrice.description,
        published: status
      };
  
  this.priceService.update(this.currentPrice.id, data).subscribe(
    response => {
      this.currentPrice.published = status;
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );
  }
  
  updatePrice() {
    this.priceService.update(this.currentPrice.id, this.currentPrice).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/prices']);
        this.message = "The Price was updated successfully!";
      },
      error => {
        console.log(error);
      }
    );
  }
  
  deletePrice() {
    this.priceService.delete(this.currentPrice.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/prices']);
    },
    
    error => {console.log(error)});
  }
}
