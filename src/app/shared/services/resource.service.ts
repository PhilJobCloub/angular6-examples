import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/********rxjs*******/
import { Observable, pipe } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

/********models*******/
import { Resource } from '@app/shared/models/resource.model';
import { QueryOptions } from '@app/shared/models/query-options.model';


/********interfaces*******/
import { Serializer } from '@app/shared/interfaces/serializer.interface';

export class ResourceService<T extends Resource> {
    constructor(
        public httpClient : HttpClient,
        private url : string,
        private endpoint : string,
        private serializer : Serializer) {}

      public create(item : T) : Observable<T> {
        return this.httpClient
          .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
          .pipe(
            map((data : any) => this.serializer.fromJson(data) as T)
          );
      }

      public update(item : T) : Observable<T> {
        return this.httpClient
          .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
            this.serializer.toJson(item))
          .pipe(
              map(data => this.serializer.fromJson(data) as T)
          );
      }

      read(id : number) : Observable<T> {
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${id}`)
          .pipe(
            map((data : any) => this.serializer.fromJson(data) as T)
          );
      }

      list(queryOptions? : QueryOptions) : Observable<T[]> {
        let options = '';

        if (!!queryOptions) {
          options = queryOptions.toQueryString();
        }

        return this.httpClient
          .get(`${this.url}/${this.endpoint}?${options}`)
          .pipe(
            map((data : any) => this.convertData(data))
          );
      }

      delete(id : number) {
        return this.httpClient
          .delete(`${this.url}/${this.endpoint}/${id}`);
      }

      private convertData(data : any) : T[] {
        return data.map(item => this.serializer.fromJson(item));
      }
    }
