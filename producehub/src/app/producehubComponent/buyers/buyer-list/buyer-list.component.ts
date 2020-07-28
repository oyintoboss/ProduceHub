import { Component, OnInit } from '@angular/core';
import { BuyersService } from 'src/app/shared/buyers/buyers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.component.html',
  styleUrls: ['./buyer-list.component.css']
})
export class BuyerListComponent implements OnInit {

  
buyerz: any;
currentBuyer = null;
currentIndex = -1;
name = '';

  constructor(private buyerService: BuyersService, private router: Router) { }

  ngOnInit() {
    this.retrieveBuyers();
  }   

  retrieveBuyers(){
    this.buyerService.getAll().subscribe(data => {
      this.buyerz = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
  }

  refreshList() {
    this.retrieveBuyers();
    this.currentBuyer = null;
    this.currentIndex = -1;
  }

  setActiveProduce(tutorial, index){
    this.currentBuyer = tutorial;
    this.currentIndex = index;
  }

  removeAllProduces() {
    this.buyerService.deleteAll().subscribe(response => {
      console.log(response);
      this.retrieveBuyers();
    },
    error => {
      console.log(error);
    });
  }

  searchName() {
    this.buyerService.findByName(this.name).subscribe(data => {
      this.buyerz = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  deleteProduce() {
    this.buyerService.delete(this.currentBuyer.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/buyers']);
    },
    
    error => {console.log(error)});
  }

}
