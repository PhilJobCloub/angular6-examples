import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder  } from '@angular/forms';

/***** models *****/
import { Company } from '../../models/company.model';

/***** services *****/
import { CompaniesService } from '@app/features/companies/services/companies.service';

/***** validators *****/
import { EmailValidator } from '@app/shared/validators/email/email.validator';


@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.css']
})
export class CompaniesFormComponent implements OnInit {

  public companyForm: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private _companiesservice : CompaniesService
    ) {}
  
  ngOnInit() {
    // formulaire
    this.companyForm = this._formbuilder.group({
      name : new FormControl(null,  [
        Validators.required,
        EmailValidator.validate.bind(this)
      ]),
      description : new FormControl(null,  [
        Validators.required
      ]),
      card : new FormControl(null)
    })   
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.companyForm.controls; 
  }

  addCompany() : void {

   // test API
   this._companiesservice.create(
      new Company(
        this.companyForm.value.name, 
        this.companyForm.value.description,
        Math.round(Math.random() * 2000))
    ).subscribe((val) => { debugger });

    // test Service
    this._companiesservice.addCompany(
      new Company(
        this.companyForm.value.name, 
        this.companyForm.value.description,
        Math.round(Math.random() * 2000))
    )

    // reset form
    this.companyForm.reset();
  }




}
