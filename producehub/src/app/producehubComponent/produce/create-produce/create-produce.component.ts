import { Component, OnInit } from '@angular/core';
import { ProduceService } from 'src/app/shared/produce/produce.service';

@Component({
  selector: 'app-create-produce',
  templateUrl: './create-produce.component.html',
  styleUrls: ['./create-produce.component.css']
})
export class CreateProduceComponent implements OnInit {

  produce = {
    name: '',
    description: '',
    imageUrl: '',
    published: false
  };
  submitted = false;

  constructor(private produceService: ProduceService) { }

  ngOnInit() {
  }

  saveProduce(){
    const data = {
      name: this.produce.name,
      description: this.produce.description,
      imageUrl: this.produce.imageUrl
    };

    this.produceService.create(data)
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

  newProduce(){
    this.submitted = false;
    this.produce = {
      name: '',
      description: '',
      imageUrl: '',
      published: false
    };
  }

}
