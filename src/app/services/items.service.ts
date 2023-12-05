import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(public http: HttpClient) {}
  getItems() {
    return this.http.get(environment.api + '/items');
  }
}
