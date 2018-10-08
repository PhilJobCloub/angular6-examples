import { Component } from '@angular/core';
import { JobsComponent } from '../jobs/jobs.component';

@Component({
  selector: 'app-jobs-list',
  template: `
    <h3>{{ componentTitle }}</h3>
    <ul>
      <li *ngFor="let job of jobs">
        <span>{{ job.id }}:  {{ job.title }}</span>
        <button (click)="selectJob(job)">select</button>
      </li>
    </ul>
  `,
  styles: []
})
export class JobsListComponent extends JobsComponent {


}
