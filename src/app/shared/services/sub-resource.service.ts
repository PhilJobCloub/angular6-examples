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



export class SubResourceService<T extends Resource> {
    constructor(
      private httpClient : HttpClient,
      private url : any,
      private parentEndpoint : string,
      private endpoint : string,
      private serializer : Serializer) {  }

    public create(item : T) : Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}`,
        this.serializer.fromJson(item))
        .pipe(
          map((data : any) => this.serializer.fromJson(data) as T)
        );
        // .pipe(catchError((error: any) => Observable.throw(error.json())));
    }

    public update(item : T) : Observable<T> {
      return this.httpClient
        .put<T>(`${this.url}/${this.parentEndpoint}/${item.parentId}/${this.endpoint}/${item.id}`,
          this.serializer.toJson(item))
        .map((data : any) => this.serializer.fromJson(data) as T);
    }

    read(parentId : number, id : number) : Observable<T> {
      return this.httpClient
        .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`)
        .pipe(
          map((data : any) => this.serializer.fromJson(data) as T)
        );
    }

    list(parentId : number, queryOptions : QueryOptions) : Observable<T[]> {
      return this.httpClient
        .get(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}?${queryOptions.toQueryString()}`)
        .pipe(
          map((data : any) => this.convertData(data.items))
        );

    }

    delete(parentId : number, id : number) {
      return this.httpClient
        .delete(`${this.url}/${this.parentEndpoint}/${parentId}/${this.endpoint}/${id}`);
    }

    protected convertData(data : any) : T[] {
      return data.map(item => this.serializer.fromJson(item));
    }
  }
