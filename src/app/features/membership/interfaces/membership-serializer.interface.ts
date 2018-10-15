
import { Membership } from '@app/features/membership/models/membership.model';

export class MembershipSerializer {
    fromJson(json : any) : Membership {
      const membership = new Membership(
        json.title,
        json.body,
        json.id
      );

      return membership;
    }

    toJson(membership : Membership) : any {
      return {
        id : membership.id,
        title : membership.title,
        body : membership.body
      };
    }
  }
