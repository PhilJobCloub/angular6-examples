
import { Membership } from '@app/features/membership/models/membership.model';

export class MembershipSerializer {
    fromJson(json : any) : Membership {
      const membership = new Membership(
        json.name,
        json.desc,
        json.id
      );

      return membership;
    }

    toJson(membership : Membership) : any {
      return {
        id: membership.id,
        name: membership.name,
        desc: membership.description
      };
    }
  }
