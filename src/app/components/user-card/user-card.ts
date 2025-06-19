import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
  name = 'Jhon'
  surname = 'Doe'
  age = 33
  public nationality = 'Japanese'
  married = true

  address = {
    country: 'UK',
    city: 'Damascus',
    street: 'Liberty'
  }
  private dni = '34432432'

  getDate(){
    return new Date()
  }

}
