import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products';

@Component({
  selector: 'app-products',
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
  providers: [
    ProductsService
  ]
})
export class ProductsComponent {

  styles = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    padding: '20px',
    width: '200px',
  }

  products: any;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((response: any) => {
        this.products = response.products
      })

  }
}