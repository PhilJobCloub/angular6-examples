import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-info',
  templateUrl: './auth-info.component.html',
  styleUrls: ['./auth-info.component.scss']
})
export class AuthInfoComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit() {
  }
}
