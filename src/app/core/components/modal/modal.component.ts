import { Component } from '@angular/core';

import { AppModalService } from '@app/services/app-modal.service';


@Component({
  selector: 'app-modal',
  template: `
    <div class="sample-container">
        <div class="sample-text">
            This is the sample modal
        </div>
        <div class="sample-close">
            <button (click)="close()">
            Close Modal
            </button>
        </div>
    </div>
  `,
  styles: [`
    .sample-container{
        display:grid;
        grid-template-columns: 1fr;
    }
    .sample-text{
        color: black;
        font-size: 20px;
        text-align:center;
    }
    .sample-close{
        text-align:center;
    }
    .sample-close button{
        width: 200px;
        height: 200px;
        color: tomato;
    }
  `]
})
export class ModalComponent  {

    constructor(private _appModalService : AppModalService) {}

    public close() {
        this._appModalService.destroy();
    }
}
