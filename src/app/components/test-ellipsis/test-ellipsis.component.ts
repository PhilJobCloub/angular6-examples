import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-ellipsis',
  template: `
    <p>
      {{ text.length}}
      <br/>
      {{ (text |  mkpEllipsis).length }}
      <br/>
      {{ text |  mkpEllipsis}}
      <br/>
      {{ text |  mkpEllipsis : 20 }}
      <br/>
      {{ (text |  mkpEllipsis : 20).length }}
    </p>
  `,
  styles: []
})
export class TestEllipsisComponent implements OnInit {
  @Input() text : string;

  constructor() { }

  ngOnInit() {
  }

}
