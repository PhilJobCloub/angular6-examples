
import { User } from '@app/features/users/models/user.model';

export class UserSerializer {
    fromJson(json : any) : User {
      const user = new User(
        json.name,
        json.id,
        json.email
      );

      return user;
    }

    toJson(user : User) : any {
      return {
        id: user.id,
        name: user.name
      };
    }
  }
