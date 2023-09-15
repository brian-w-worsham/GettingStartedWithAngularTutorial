import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
  // retrieve shipping data via HTTP from the shipping.json file.
export class ShippingComponent implements OnInit {
  // define a shippingCosts property that sets the shippingCosts property using the getShippingPrices() method from CartService.
  shippingCosts!: Observable<{ type: string, price: number }[]>;
  constructor(
    // inject the CartService
    private cartService: CartService
  ) { }
  
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
