import { Injectable } from '@angular/core';
import { Company } from '../models/company.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';



/*********** Import Resource service *********/
import { ResourceService } from '@app/shared/services/resource.service';

/*********** Import CompanySerializer interface *********/
import { CompanySerializer } from '@app/features/companies/interfaces/company-serializer.interface';

@Injectable({
  providedIn: 'root'
})

export class CompaniesService extends ResourceService<Company> {

    constructor(
      httpClient: HttpClient) {

      super(
        httpClient,
        'https://jsonplaceholder.typicode.com',
        'posts',
        new CompanySerializer());
    }

  public companies_list_updated_subject$ = new Subject<Company[]>();
  private companies : Company[] = [];

  getCompanies() {
    return this.companies.slice();
  }

  addCompany(company : Company) {
    this.companies = [
      ...this.companies,
      company
    ];
    //this.usersListUpdated.emit(this.companies);
    this.companies_list_updated_subject$.next(this.companies)
  }


  deleteCompanies(companyId : number) {
    this.companies = [
      ...this.companies.filter((company) => company.id != companyId)
    ];
    //this.usersListUpdated.emit(this.companies);
    this.companies_list_updated_subject$.next(this.companies)
  }


}

