import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Example } from '../example';

@Injectable()
export class BriscolaService {
  constructor(private http: HttpClient) {}

  getTestResponse(): Observable<HttpResponse<Example[]>> {
    return this.http.get<Example[]>(
      'https://my-json-server.typicode.com/typicode/demo/posts',
      { observe: 'response', responseType: 'json' }
    );
  }
}
