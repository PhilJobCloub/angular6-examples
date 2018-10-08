import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
        <div class="card-header">
        <!-- header slot here -->
            <ng-content select="app-card-header"></ng-content>
        </div>
        <!-- body slot here -->
        <ng-content select="app-card-body"></ng-content>
        <div class="card-footer">
        <!-- footer -->
            <ng-content select="app-card-footer"></ng-content>
        </div>
    </div>
    `,
  styles: []
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
