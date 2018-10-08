import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jobs',
  template: ``,
  styles: []
})
export class JobsComponent {
  @Input() componentTitle : string = 'Jobs';
  @Input() jobs : any[] = [
    { id : 1, title : 'Developper'},
    { id :2, title: 'Wizard' },
    { id :3, title: 'Project Manager' }
  ]

  @Output() select : EventEmitter<any> = new EventEmitter();
  
  selectJob(job : any) {
    this.select.emit(job);
  }

}
