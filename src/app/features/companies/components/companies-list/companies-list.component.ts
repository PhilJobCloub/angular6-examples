import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Company } from '../../models/company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],

})
export class CompaniesListComponent {

  @Input() companies : Company[];
  @Output() handleDeleteCompany : EventEmitter<number> = new EventEmitter();

  removeCompany({id}) {
    this.handleDeleteCompany.emit(id);
  }

}

