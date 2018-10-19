
import { Post } from '@app/features/posts/models/post.model';

export class PostSerializer {
    fromJson(json : any) : Post {
      const post = new Post(
        json.title,
        json.id,
        json.body
      );

      return post;
    }

    toJson(post : Post) : any {
      return {
        id: post.id,
        title: post.title,
        body: post.body
      };
    }
  }
