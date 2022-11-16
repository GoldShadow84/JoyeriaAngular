import { Component, OnInit } from '@angular/core';
import { JewelersCartService } from '../jewelers-cart.service';
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
      stock: 0,
      clearance: false,
      quantity: 0,
    },
    {
      name: "Better call saul",
      type: "Porter",
      price: 12,
      stock: 10,
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

    },
    {
      name: "Hielol",
      type: "Porter",
      price: 12,
      stock: 10,
      clearance: false,
     quantity: 0,

  },
  
];

  constructor(private cart: JewelersCartService) {
  }

  ngOnInit(): void {
  }

  addToCart(beer: Beer): void {
    this.cart.addToCart(beer);
  }



  maxReached(m: string) {
    alert(m);
  }

}
