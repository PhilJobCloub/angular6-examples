import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output } from '@angular/core';

import * as fromAnimations from '@app/shared/animations';

@Component({
  selector: 'app-list-single-item',
  templateUrl: './list-single-item.component.html',
  styleUrls: ['./list-single-item.component.css'],
  animations: [
    fromAnimations.slideIn
  ]


})
export class ListSingleItemComponent implements OnInit {

  @Input() item = ' test ';
  @Input() name = 'Philippe';
  @Input() type : string;
  @Input() slideState : string;
  // @Input() isDeleteButtonDisplayed : boolean = true;

  @Output() handleClickEvent : EventEmitter<any> = new EventEmitter();
  @Output() handleItemClickEvent : EventEmitter<any> = new EventEmitter();

  @HostListener('click') onItemClick() {
    this.handleItemClickEvent.emit(this.item);
  }

  @HostBinding('@slideIn') get slideIn() {
    return 'in';
  }

  constructor() { }

  ngOnInit() {

  }

  /****Methods*****/
  onClick(item : any) {
    // alert('ok')
    this.handleClickEvent.emit(item);
  }

  /******Getter*****/
  get props() {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    switch (this.type) {
      case 'obj' :
        return Object.keys(this.item)
                .map((val) => {
                  /*
                  this.item[val] = this.item[val]+'';
                  if (this.item[val].match(regex)) {
                    return `<img src="${this.item[val]}" width="200" />`;
                  } else {
                    return `${val} : ${this.item[val]}`;
                  }*/
                  return `${val} : ${this.item[val]} <br />`;
                });
      default :
        return this.item;
    }

  }

}
