import { Component, OnInit } from '@angular/core';
import { ProduceService } from 'src/app/shared/produce/produce.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-produce-list',
  templateUrl: './produce-list.component.html',
  styleUrls: ['./produce-list.component.css']
})
export class ProduceListComponent implements OnInit {

produces: any;
currentProduce = null;
currentIndex = -1;
name = '';

  constructor(private produceService: ProduceService, private router: Router) { }

  ngOnInit() { 
      this.retrieveProduces();
    }

    


    retrieveProduces(){
      this.produceService.getAll().subscribe(data => {
        this.produces = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
    }

    refreshList() {
      this.retrieveProduces();
      this.currentProduce = null;
      this.currentIndex = -1;
    }

    setActiveProduce(tutorial, index){
      this.currentProduce = tutorial;
      this.currentIndex = index;
    }

    removeAllProduces() {
      this.produceService.deleteAll().subscribe(response => {
        console.log(response);
        this.retrieveProduces();
      },
      error => {
        console.log(error);
      });
    }

    searchName() {
      this.produceService.findByName(this.name).subscribe(data => {
        this.produces = data;
        console.log(data);
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


