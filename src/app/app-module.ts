import { NgModule ,provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Title } from './title/title';
import { Avatar } from './avatar/avatar';
import { Btn } from './btn/btn';
import { Icon } from './icon/icon';
import { Link } from './link/link';
import { UserCard } from './user-card/user-card';
import { ProductCard } from './product-card/product-card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Title,
    Avatar,
    Btn,
    Icon,
    Link,
    UserCard,
    ProductCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
