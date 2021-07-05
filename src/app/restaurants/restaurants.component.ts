import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {RestaurantsService} from './restaurants.service';

import {Restaurant} from './restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute ) { }


  ngOnInit () {
    this.restaurantsService.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
