
import { Membership } from '@app/features/membership/models/membership.model';

export class MembershipSerializer {
    fromJson(json : any) : Membership {
      const membership = new Membership(
        json.title,
        json.body,
        json.id,
        json.userId
      );

      return membership;
    }

    toJson(membership : Membership) : any {
      return {
        id : membership.id,
        userId : membership.userId,
        title : membership.title,
        body : membership.body
      };
    }
  }
