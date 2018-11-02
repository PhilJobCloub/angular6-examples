import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

  @Input() items : any[];
  @Input() type = 'string';

  @Output() handleOnClickEvent : EventEmitter<any> = new EventEmitter();
  @Output() handleOnItemClickEvent : EventEmitter<any> = new EventEmitter();

  onClickEvent(item : any) {
    this.handleOnClickEvent.emit(item);
  }

  onItemClickEvent(item : any) {
    this.handleOnItemClickEvent.emit(item);
  }

}
