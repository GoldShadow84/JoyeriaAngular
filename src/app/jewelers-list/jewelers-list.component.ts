import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';

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
    },
    {
      name: "Better call saul",
      type: "Porter",
      price: 12,
      stock: 100,
      clearance: true,
    },
    {
        name: "Hielol",
        type: "Porter",
        price: 12,
        stock: 0,
        clearance: false,
    }
  
];

  constructor() { }

  ngOnInit(): void {
  }

}
