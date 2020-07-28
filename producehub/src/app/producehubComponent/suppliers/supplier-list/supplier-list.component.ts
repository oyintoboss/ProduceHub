import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/shared/supplier/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  suppliers: any;
  currentSupplier = null;
  currentIndex = -1;
  name = '';  
    
  constructor(private supplierService: SupplierService, private router: Router) { }

  ngOnInit() {
  this.retrieveSupplier();
  }

  retrieveSupplier(){
    this.supplierService.getAll().subscribe(data => {
      this.suppliers = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
  }

  refreshList() {
    this.retrieveSupplier();
    this.currentSupplier = null;
    this.currentIndex = -1;
  }

  setActiveSupplier(supplier, index){
    this.currentSupplier = supplier;
    this.currentIndex = index;
  }

  removeAllProduces() {
    this.supplierService.deleteAll().subscribe(response => {
      console.log(response);
      this.retrieveSupplier();
    },
    error => {
      console.log(error);
    });
  }

  searchName() {
    this.supplierService.findByName(this.name).subscribe(data => {
      this.suppliers = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  deleteProduce() {
    this.supplierService.delete(this.currentSupplier.id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/supplierz']);
    },
    
    error => {console.log(error)});
  }


}
