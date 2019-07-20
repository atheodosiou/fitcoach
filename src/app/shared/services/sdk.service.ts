import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Sdk {

  constructor(private http: HttpClient) { }

  get(endpoint: string, httpHeaders?: HttpHeaders): Observable<any> {
    if (httpHeaders) {
      return this.http.get(endpoint,{headers:httpHeaders});
    } else {
      return this.http.get(endpoint);
    }
  }
}
