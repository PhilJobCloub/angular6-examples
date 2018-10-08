import { Component, OnInit, Input } from '@angular/core';

import { Company } from '../../models/company.model';
import { CompaniesService } from '@app/features/companies/services/companies.service';


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
  
})
export class CompaniesListComponent implements OnInit {

  @Input() companies : Company[] = [];

  constructor(private _companiesservice : CompaniesService) { }

  ngOnInit() {
    // get companies
    this.companies = this._companiesservice.getCompanies();

    // subscribe event
    this._companiesservice.companies_list_updated_subject$.subscribe(
      (companies : Company[]) => {
        this.companies = companies;
      }
    )
  }

  removeCompany({id}) {
    
    this._companiesservice.deleteCompanies(id)
  }

}

