import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/app/shared/supplier/supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  supplier = {
    firstName: '',
    lastName: '',
    isMember: false,
    registrationDate: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
    email: '',
    about: '',
    notes: '',    
    published: false
  };
  submitted = false;


  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
  }

  saveSupplier(){
    const data = {
      firstName: this.supplier.firstName,
      lastName: this.supplier.lastName,
      isMember: false,
      registrationDate: this.supplier.registrationDate,
      address: this.supplier.address,
      city: this.supplier.city,
      state: this.supplier.state,
      zipcode: this.supplier.zipcode,
      country: this.supplier.country,
      phone: this.supplier.phone,
      email: this.supplier.email,
      about: this.supplier.about,
      notes: this.supplier.notes,    
    };

    this.supplierService.create(data)
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

  newSupplier(){
    this.submitted = false;
    this.supplier = {
      firstName: '',
    lastName: '',
    isMember: false,
    registrationDate: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
    email: '',
    about: '',
    notes: '', 
      published: false
    };
  }

}
