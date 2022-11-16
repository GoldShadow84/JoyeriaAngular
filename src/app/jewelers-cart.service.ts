import { Injectable } from '@angular/core';
import { Beer } from './jewelers-list/Beer';

@Injectable({
  providedIn: 'root'
})

//maneja la logica del carrito
@Injectable({
  providedIn: 'root'
})


  export class JewelersCartService {
    
    


    addToCart(beer: Beer) {
      throw new Error('method not implemented');
    }

    constructor() { }
  }



