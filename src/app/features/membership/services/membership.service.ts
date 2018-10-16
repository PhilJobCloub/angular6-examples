import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*********** Import Model *********/
import { Membership } from '@app/features/membership/models/membership.model';

/*********** Import Resource service *********/
import { ResourceService } from '@app/shared/services/resource.service';

/*********** Import CompanySerializer interface *********/
import { MembershipSerializer } from '@app/features/membership/interfaces/membership-serializer.interface';

@Injectable({
  providedIn: 'root'
})

export class MembershipService extends ResourceService<Membership> {

    constructor(
      httpClient : HttpClient) {

      super(
        httpClient,
        'https://jsonplaceholder.typicode.com',
        'posts',
        new MembershipSerializer());
    }

  private membership : Membership[] = [];

}

