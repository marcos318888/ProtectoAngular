import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header';
import { Footer} from './footer/footer';
import { Title } from './title/title';
import { Btn } from './btn/btn';
import { Icon } from './icon/icon';
import { Link } from './link/link';
import { UserCard } from './user-card/user-card';
import { ProductCardComponent } from './product-card/product-card';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing-module';
import { AvatarComponent } from './avatar/avatar';

@NgModule({
  declarations: [
    AvatarComponent,
    HeaderComponent,
    Footer,
    Title,
    Btn,
    Icon,
    Link,
    UserCard,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ProductCardComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }