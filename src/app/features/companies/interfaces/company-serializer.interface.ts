
import { Company } from '@app/features/companies/models/company.model';

export class CompanySerializer {
    fromJson(json: any): Company {
      const company = new Company(
        json.name,
        json.desc,
        json.id
      );

  
      return company;
    }
  
    toJson(company: Company): any {
      return {
        id: company.id,
        name: company.name,
        desc: company.description
      };
    }
  }