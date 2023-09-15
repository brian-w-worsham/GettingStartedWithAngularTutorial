import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // items property to store the products in the cart.
  items = this.cartService.getItems();
  //Inject the CartService so that the CartComponent can use it by adding it to the constructor()
  constructor(private cartService: CartService){}
}
