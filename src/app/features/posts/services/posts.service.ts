import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';

/*********** Import Resource service *********/
import { ResourceService } from '@app/shared/services/resource.service';

/*********** Import CompanySerializer interface *********/
import { PostSerializer } from '@app/features/posts/interfaces/post-serializer.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService extends ResourceService<Post> {

  constructor(httpClient : HttpClient) {
    super(
      httpClient,
      'https://jsonplaceholder.typicode.com',
      'posts',
      new PostSerializer()
    )
  }
}

