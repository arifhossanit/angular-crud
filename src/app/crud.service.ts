import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl = 'http://localhost/angular12/curd/backend';
  constructor(private http: HttpClient) { }
  store(mydata: any) {
    return this.http.post(`${this.baseUrl}/mypost.php`, { data: mydata })
  }
}
