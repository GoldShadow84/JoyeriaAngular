import { Component, OnInit } from '@angular/core';
import { JewelersDataService } from '../jewelers-data.service';
import { Jeweler } from './Jeweler';

@Component({
  selector: 'app-jewery-products',
  templateUrl: './jewery-products.component.html',
  styleUrls: ['./jewery-products.component.css']
})
export class JeweryProductsComponent implements OnInit {

  model: Jeweler = { tipos: '', descripcion: '', antiguedad: '', clasificacion: '', id: 0};


  jewelers: Jeweler[] = [];

  constructor(private jewelersDataService: JewelersDataService ) { }

  ngOnInit(): void {
    this.jewelersDataService.getAll()
    .subscribe(jewelers => this.jewelers = jewelers);
  }

  onSubmit() {
    this.jewelersDataService.addNewJeweler(this.model)
    .subscribe((response: Jeweler) => console.log(response));
  }

  updateJeweler(jeweler: Jeweler) {
    this.jewelersDataService.updateJeweler(jeweler.id, this.model)
    .subscribe((response: Jeweler) => console.log(response));
  }

  deleteJeweler(jeweler: Jeweler) {
    this.jewelersDataService.deleteJeweler(jeweler.id)
    .subscribe((response: Jeweler) => console.log(response));
  }

}
