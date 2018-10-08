import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-header',
  template: `
      <ng-content></ng-content>
  `,
  styles: []
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
