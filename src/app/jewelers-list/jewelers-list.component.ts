import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-jewelers-list',
  templateUrl: './jewelers-list.component.html',
  styleUrls: ['./jewelers-list.component.css']
})
export class JewelersListComponent implements OnInit {



  beers: Beer [] = [ 
    {
      name: "Negra fuerte",
      type: "Porter",
      price: 12,
      stock: 100,
      clearance: false,
      quantity: 0,
    },
    {
      name: "Better call saul",
      type: "Porter",
      price: 12,
      stock: 100,
      clearance: true,
      quantity: 0,

    },
    {
        name: "Hielol",
        type: "Porter",
        price: 12,
        stock: 0,
        clearance: false,
       quantity: 0,

    }
  
];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(beer: Beer): void {
    if(beer.quantity < 10) {
      beer.quantity++;
    }
  }

  downQuantity(beer: Beer): void {
    if(beer.quantity > 0 ) {
      beer.quantity--;
    }
  }

  changeQuantity(event: any, beer: Beer): void {
    console.log(event.target);
  }

}
