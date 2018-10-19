import { Resource } from '@app/shared/models/resource.model';

export interface Serializer {
    fromJson(json : any) : Resource;
    toJson(resource : Resource) : any;
  }
