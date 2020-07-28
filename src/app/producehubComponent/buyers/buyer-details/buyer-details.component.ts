import { Component, OnInit } from '@angular/core';
import { BuyersService } from 'src/app/shared/buyers/buyers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buyer-details',
  templateUrl: './buyer-details.component.html',
  styleUrls: ['./buyer-details.component.css']
})
export class BuyerDetailsComponent implements OnInit {

  currentBuyer = null;
  message = '';

  constructor(private buyerService: BuyersService,  private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getBuyer(this.route.snapshot.paramMap.get('id'));
  }

  getBuyer(id) {
    this.buyerService.get(id).subscribe(data => {
      this.currentBuyer = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  updatePublished(status) {
    const data = {
      name: this.currentBuyer.name,
      description: this.currentBuyer.description,
      published: status
    };

this.buyerService.update(this.currentBuyer.id, data).subscribe(
  response => {
    this.currentBuyer.published = status;
    console.log(response);
  },
  error => {
    console.log(error);
  }
);
}

updateBuyer() {
  this.buyerService.update(this.currentBuyer.id, this.currentBuyer).subscribe(
    response => {
      console.log(response);
      this.message = "The Buyers was updated successfully!";
      this.router.navigate(['/buyers']);
    },
    error => {
      console.log(error);
    }
  );
}

deleteBuyer() {
  this.buyerService.delete(this.currentBuyer.id).subscribe(response => {
    console.log(response);
    this.router.navigate(['/buyers']);
  },
  
  error => {console.log(error)});
}}
