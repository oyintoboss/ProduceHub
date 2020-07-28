import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/shared/supplier/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

currentSupplier = null;
message = '';

  constructor(private supplierService: SupplierService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getSupplier(this.route.snapshot.paramMap.get('id'));
  }

  getSupplier(id) {
    this.supplierService.get(id).subscribe(data => {
      this.currentSupplier = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  updatePublished(status) {
    const data = {
      name: this.currentSupplier.name,
      description: this.currentSupplier.description,
      published: status
    };

this.supplierService.update(this.currentSupplier.id, data).subscribe(
  response => {
    this.currentSupplier.published = status;
    console.log(response);
  },
  error => {
    console.log(error);
  }
);
}

updateSupplier() {
  this.supplierService.update(this.currentSupplier.id, this.currentSupplier).subscribe(
    response => {
      console.log(response);
      this.message = "The Supplier was updated successfully!";
    },
    error => {
      console.log(error);
    }
  );
}

deleteSupplier() {
  this.supplierService.delete(this.currentSupplier.id).subscribe(response => {
    console.log(response);
    this.router.navigate(['/supplierz']);
  },
  
  error => {console.log(error)});
}}
