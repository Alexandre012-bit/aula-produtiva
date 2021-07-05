import { Route } from "@angular/router"


import { HomeComponent } from "./home/home.component"
import { RestaurantsComponent } from "./restaurants/restaurants.component"
import { RestaurantDetallComponent } from "./restaurant-detall/restaurant-detall.component"
import { AboutComponent} from "./about/about.component"


export const ROUTES = [
{path: '', component: HomeComponent},
{path: 'restaurants', component: RestaurantsComponent},
{path: 'restaurants/:id', component: RestaurantDetallComponent},
{path: 'about', component: AboutComponent},
]