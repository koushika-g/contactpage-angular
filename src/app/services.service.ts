import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(public http: HttpClient) {}
  add(x:any) {

    return this.http.post<any>('http://localhost:9800/testuser',x);

  }
}