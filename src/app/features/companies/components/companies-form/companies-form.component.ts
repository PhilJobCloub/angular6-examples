import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder  } from '@angular/forms';

/***** models *****/
import { Company } from '../../models/company.model';

/***** validators *****/
import { EmailValidator } from '@app/shared/validators/email/email.validator';


@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.css']
})
export class CompaniesFormComponent implements OnInit {

  public companyForm: FormGroup;

  @Output() handleAddCompany : EventEmitter<Company> = new EventEmitter();
  
  constructor(
    private _formbuilder: FormBuilder
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

  addCompany() {
     let newCompany : Company =  new Company(
      this.companyForm.value.name, 
      this.companyForm.value.description,
      Math.round(Math.random() * 2000))


  // reset form
  this.companyForm.reset();

  // emit the event
  this.handleAddCompany.emit(newCompany)
 
  }




}
