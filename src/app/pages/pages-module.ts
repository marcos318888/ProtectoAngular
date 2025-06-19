import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './product/product';
import { AboutUs } from './about-us/about-us';
import { NotFound } from './not-found/not-found';
import { ComponentsModule } from '../components/components-module';
@NgModule({
  declarations: [
    ProductsComponent,
    AboutUs,
    NotFound
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    ProductsComponent,
    AboutUs,
    NotFound,
  ],
})
export class PagesModule { }