import { Component } from '@angular/core';
// This service provides convenient methods for generating controls
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // items property to store the products in the cart.
  items = this.cartService.getItems();
  //To gather the user's name and address, use the FormBuilder group() method to set the checkoutForm property to a form model containing name and address fields.
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  //Inject the CartService so that the CartComponent can use it by adding it to the constructor()
  //Inject the FormBuilder service in the CartComponent constructor(). This service is part of the ReactiveFormsModule module, which you've already imported.
  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  //This method allows users to submit their name and address. In addition, this method uses the clearCart() method of the CartService to reset the form and clear the cart.
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
