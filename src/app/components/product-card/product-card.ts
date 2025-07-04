import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCardComponent {
  @Input() product: any

  productImageStyle = {
    border: '1px solid black',
    filter: 'sepia(0)'
  }

  formState = false

  address = ''
  postalCode = 0

  buyProduct() {
    console.log('compraremos un producto');
    this.formState = true
  }

  orderProduct() {
    console.log(`Direccion de usuario: ${this.address}`);
    console.log(`Codigo postal: ${this.postalCode}`);
  }

  addToCart() {
    console.log('agregaremos un producto al carro de compras');
  }

  onMouseEnter() {
    console.log('mouse enter');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0.3)'}
  }

  onMouseleave() {
    console.log('mouse leave');
    this.productImageStyle = {...this.productImageStyle, filter: 'sepia(0)'}
  }
}