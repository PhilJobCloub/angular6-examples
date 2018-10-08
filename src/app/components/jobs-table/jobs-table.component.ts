import { Component } from '@angular/core';
import { JobsComponent } from '../jobs/jobs.component';

@Component({
  selector: 'app-jobs-table',
  template: `
    <table>
      <thead>
        <tr>
          <th colspan="3">
            {{ componentTitle }}
          </th>
        </tr>
        <tr>
          <th>
            id
          </th>
          <th>
            title
          </th>
          <th>
            action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let job of jobs">
          <td>{{ job.id }}</td>
          <td>{{ job.title }}</td>
          <td><button (click)="selectJob(job)">select</button></td>
        </tr>
      </tbody>
      
    </table>
  `,
  styles: []
})
export class JobsTableComponent extends JobsComponent {


}
