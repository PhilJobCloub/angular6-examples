import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

/*********** Import Resource service *********/
import { ResourceService } from '@app/shared/services/resource.service';

/*********** Import CompanySerializer interface *********/
import { UserSerializer } from '@app/features/users/interfaces/user-serializer.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService extends ResourceService<User> {

  constructor(httpClient : HttpClient) {

    super(
      httpClient,
      'https://jsonplaceholder.typicode.com',
      'users',
      new UserSerializer()
    )
  }
}

