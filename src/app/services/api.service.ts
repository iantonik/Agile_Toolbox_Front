import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:1234/dev/api';

  postUser(name: string, email: string, password: string) {
    const postObj = {
      name: name,
      email: email,
      password: password
    };

    return this.http.post(this.baseUrl + '/users', postObj);
  }

}
