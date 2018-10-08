import { Component } from '@angular/core';

/* services */
import { AppModalService } from '@app/services/app-modal.service';

import {ModalComponent} from '@app/core/components/modal/modal.component';

@Component({
  selector: 'app-users-navigation',
  templateUrl: './users-navigation.component.html',
  styleUrls: ['./users-navigation.component.scss'],
  
})
export class UsersNavigationComponent {

  constructor(    private _appModalService : AppModalService) {

  }

  public openDialog() {
    let inputs = {};
    this._appModalService.init(ModalComponent, inputs, {});
  }

}
