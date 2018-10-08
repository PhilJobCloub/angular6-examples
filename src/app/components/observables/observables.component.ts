import { Component, OnInit } from '@angular/core';

import { Observable, Observer} from 'rxjs/Rx';
import { SubjectService } from '@app/services/subject.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {
  public obsrNumber = 0;
  constructor(private ss : SubjectService) { }

  ngOnInit() {
    /*
    infinite observable
    !! need to unsubscribe
    */
    /*const myNumbers = Observable.interval(1000)
      .map(
        (data) => {
          let stuff;
          if (data != 0) {
            stuff = data * data;
            this.ss.setUserActivated(stuff)
          } else {
            return stuff = data;
          }

          return stuff
          
        }
      );

    myNumbers.subscribe(
      (number : number) => {
        this.obsrNumber = number;
      }
    )
    

    // create

    const myObservable = Observable.create((observer : Observer<any>) => {
        setTimeout(() => {
          // push next data package
          observer.next('first package')
        }, 2000);

        setTimeout(() => {
          // push error should failed
          observer.next('second package')
        }, 4000);

        setTimeout(() => {
          // push error should failed
          //observer.error('does not work')
          observer.complete()
        }, 5000);

        setTimeout(() => {
          // push error should failed
          observer.next('third package')
        }, 6000);

    })

    myObservable.subscribe(
      // what data are we gonna emit
      (data : string) => { console.log(data)},
      (error : string) => { console.log(error)},
      () => { console.log('completed')},
    )
 */
  }
 

}
