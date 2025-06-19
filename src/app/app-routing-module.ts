import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/product/product';
import { AboutUs } from './pages/about-us/about-us';
import { NotFound } from './pages/not-found/not-found';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'about-us', component: AboutUs},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: '**', component: NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
