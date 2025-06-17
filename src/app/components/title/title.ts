import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title implements OnChanges {
  
  @Input() title = ''
  @Output() dataFromChild = new EventEmitter()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.dataFromChild.emit('data from child component')
  }
}
