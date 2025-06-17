import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Avatar} from './avatar/avatar';
import { Header } from './header/header';
import { Footer} from './footer/footer';
import { Title } from './title/title';
import { Btn } from './btn/btn';
import { Icon } from './icon/icon';
import { Link } from './link/link';
import { UserCard } from './user-card/user-card';
import { ProductCard } from './product-card/product-card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    Avatar,
    Header,
    Footer,
    Title,
    Avatar,
    Btn,
    Icon,
    Link,
    UserCard,
    ProductCard,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ProductCard,
    Header,
  ]
})
export class ComponentsModule { }