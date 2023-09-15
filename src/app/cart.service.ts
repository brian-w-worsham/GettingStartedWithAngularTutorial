// inject the HttpClient service into your service so your application can fetch data and interact with external APIs and resources.
import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  // this is a 
  // this is a cart service to store information about products in the cart.
export class CartService {
  //items property to store the array of the current products in the cart
  items: Product[] = [];

  // Inject HttpClient into the CartService constructor().
  constructor(private http: HttpClient) { }

  // methods to add items to the cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // method to return cart items from the array
  getItems() {
    return this.items;
  }

  // returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  // To get shipping data, from shipping.json, You can use the HttpClient get() method.
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }
}
