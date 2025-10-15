import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Why } from './why/why';
import { Modules } from './modules/modules';
import { Customers } from './customers/customers';
import { Pricing } from './pricing/pricing';
import { Reviews } from './reviews/reviews';
import { Contact } from './contact/contact';
import { Features } from './features/features';

@Component({
  selector: 'app-landing',
  imports: [Hero, Why, Modules, Features, Customers, Reviews, Pricing, Contact],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
