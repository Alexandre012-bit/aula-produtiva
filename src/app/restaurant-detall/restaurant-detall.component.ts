import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detall',
  templateUrl: './restaurant-detall.component.html',
})
export class RestaurantDetallComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.router.snapshot.params['id'])
    .subscribe ( restaurant =>this.restaurant = restaurant)
   
  }

}
