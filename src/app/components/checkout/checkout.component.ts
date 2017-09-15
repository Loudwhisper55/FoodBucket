import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrderService} from '../../client/api/order.service';
import {ProductService} from '../../client/api/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  constructor(private orderService: OrderService, private productService: ProductService) { }
    surname: string;
    phone: string;
    city: string;
    address: string;
    firstName: string;
    prodIdsArr = [];
    passedObjFromCart;
    orderInfo;
    productTitlesArray: string[] = [];
  ngOnInit() {
      if (JSON.parse(localStorage.getItem('newOrder'))) {
          this.passedObjFromCart = JSON.parse(localStorage.getItem('newOrder'));

          console.log(this.passedObjFromCart);
          const arrayOfPassedObjs = this.passedObjFromCart.products;
          arrayOfPassedObjs.forEach((data, i) => {
                  const {productId, quantity} = data;
                  this.prodIdsArr.push(productId);
              }

          );
          this.passedObjFromCart.products = this.prodIdsArr;
          this.prodIdsArr.forEach(productId => {
              this.productService.findProductById(productId).subscribe(res => {
                  this.productTitlesArray.push(res.title);
              });
          });
          this.firstName = this.passedObjFromCart.username.split(' ')[0];
          this.surname = this.passedObjFromCart.username.split(' ')[1];
      }
        this.orderInfo = JSON.parse(localStorage.getItem('newOrder'));


      function validateCardNumber(value) {
          const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
          const matches = v.match(/\d{4,16}/g);
          const match = matches && matches[0] || '';
          const parts = [];
          for (let i = 0, len = match.length; i < len; i += 4) {
              parts.push(match.substring(i, i + 4));
          }
          if (parts.length) {
              return parts.join(' ');
          } else {
              return value;
          }
      }
      const cardInput = (<HTMLInputElement>document.getElementById('card'));
          cardInput.addEventListener('input', function () {
              this.value = validateCardNumber(this.value);
          });
  }
    onSubmit(form: NgForm) {
        const username = this.passedObjFromCart.username;
        const city = this.passedObjFromCart.city;
        const address = this.passedObjFromCart.address;
        const price = this.passedObjFromCart.price;
        const status = 'NEW';
        const phone = form.value.phone;
        this.orderService.putOrder({
            'username': username,
            'city': city,
            'price': price,
            'address': address,
            'status': status,
            'phone': phone,
            'products': this.prodIdsArr
        }).subscribe(res => {
            console.log('Result from subscribe that goes to putOrder', res);

        });
    }
}
