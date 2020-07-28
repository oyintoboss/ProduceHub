import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduceService } from 'src/app/shared/produce/produce.service';


@Component({
  selector: 'app-produce-details',
  templateUrl: './produce-details.component.html',
  styleUrls: ['./produce-details.component.css']
})
export class ProduceDetailsComponent implements OnInit {

currentProduce = null;
message = '';

  constructor(private produceService: ProduceService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getProduce(this.route.snapshot.paramMap.get('id'));
  }
  
  getProduce(id) {
    this.produceService.get(id).subscribe(data => {
      this.currentProduce = data;
      console.log(data);
    },
    error => {
      console.log(error);
    }
    );
  }

  updatePublished(status) {
    const data = {
      name: this.currentProduce.name,
      description: this.currentProduce.description,
      published: status
    };

this.produceService.update(this.currentProduce.id, data).subscribe(
  response => {
    this.currentProduce.published = status;
    console.log(response);
  },
  error => {
    console.log(error);
  }
);
}

updateProduce() {
  this.produceService.update(this.currentProduce.id, this.currentProduce).subscribe(
    response => {
      console.log(response);
      this.message = "The Produce was updated successfully!";
    },
    error => {
      console.log(error);
    }
  );
}

deleteProduce() {
  this.produceService.delete(this.currentProduce.id).subscribe(response => {
    console.log(response);
    this.router.navigate(['/produce']);
  },
  
  error => {console.log(error)});
}

}
