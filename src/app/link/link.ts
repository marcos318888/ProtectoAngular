import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: false,
  templateUrl: './link.html',
  styles: [
    `.link {color: cyan}`,
    `.link:hover {color: blue}`  
  ]
})
export class Link {

}
