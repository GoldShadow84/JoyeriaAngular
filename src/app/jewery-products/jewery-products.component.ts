import { Component, OnInit } from '@angular/core';
import { JewelersDataService } from '../jewelers-data.service';
import { Jeweler } from './Jeweler';

@Component({
  selector: 'app-jewery-products',
  templateUrl: './jewery-products.component.html',
  styleUrls: ['./jewery-products.component.css']
})
export class JeweryProductsComponent implements OnInit {

  jewelers: Jeweler[] = [];

  constructor(private jewelersDataService: JewelersDataService ) { }

  ngOnInit(): void {
    this.jewelersDataService.getAll()
    .subscribe(jewelers => this.jewelers = jewelers);
    

  }

}
