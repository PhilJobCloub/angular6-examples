import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {

  constructor(public auth : AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    alert(this.auth.isAuthenticated);
  }

}
