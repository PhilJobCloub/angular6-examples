import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translusion',
  template: `
    <h1>Multi slot transclusion</h1>
    <app-card>
        <h4 class="card-title">You can put any content here</h4>
        <!-- header -->
        <app-card-header>
            New <strong>header</strong>
        </app-card-header>
        <!-- body -->
        <app-card-body>
            <div class="card-block">
                <h4 class="card-title">You can put any content here</h4>
                <p class="card-text">For example this line of text and</p>
                <a (click)="dosomething()" class="btn btn-primary">This button</a>
              </div>
        </app-card-body>

        <!-- footer -->
        <app-card-footer>
            New <strong>footer</strong>
        </app-card-footer>
      </app-card>
    <!-- card component -->
  `,
  styles: []
})
export class TranslusionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dosomething() {
    alert('click on transculion button')
  }

}
