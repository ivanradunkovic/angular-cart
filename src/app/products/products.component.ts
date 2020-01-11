import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data !== null){
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Tea",
        description: "British Tea",
        img:"assets/tea.png",
        price: 1.99
      },
      {
        id:2,
        title: "Espresso Machine",
        description: "Italian Espresso Machine",
        img:"assets/espresso.png",
        price:5
      },
      {
        id:3,
        title: "Coffee",
        description: "Cup of coffee",
        img:"assets/coffe.png",
        price:2.99
      },
      {
        id:4,
        title: "Latte",
        description: "200 ml of Latte",
        img:"assets/coffe_beans.png",
        price:3
      },
      {
        id:5,
        title: "Cappuccino",
        description: "250 ml of Cappuccino",
        img:"assets/cappucino.png",
        price:4.50
      },
      {
        id:6,
        title: "Macchiato",
        description: "300 ml of Macchiato",
        img:"assets/macchiato.png",
        price:1
      },
      {
        id:7,
        title: "Black Coffee",
        description: "100 ml of Coffee",
        img:"assets/coffe2.png",
        price:4
      },
      {
        id:8,
        title: "Cocoa",
        description: "Hot Cocoa",
        img:"assets/hot_cocoa.png",
        price:2
      },
      {
        id:9,
        title: "Milk",
        description: "Cup of cold milk",
        img:"assets/milk.png",
        price:3
      }
    ]
  }

  addToCart(index){
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    if(data !== null){
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}