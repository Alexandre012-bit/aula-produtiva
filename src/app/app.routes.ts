import { Route } from '@angular/router'


import { HomeComponent } from './home/home.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetallComponent } from './restaurant-detall/restaurant-detall.component'
import { AboutComponent} from './about/about.component'
import { MenuComponent } from './restaurant-detall/menu/menu.component'
import { ReviewsComponent } from './restaurant-detall/reviews/reviews.component'


export const ROUTES = [
{path: '', component: HomeComponent},
{path: 'restaurants', component: RestaurantsComponent},
{path: 'restaurants/:id', component: RestaurantDetallComponent
,
  children: [
    {path: '', redirectTo: 'menu', pathMatch: 'full'  },
    {path: 'menu', component: MenuComponent},
    {path: 'reviews', component: ReviewsComponent}
    ]
 }
,
{path: 'about', component: AboutComponent},
]