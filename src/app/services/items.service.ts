import { UtilsService } from './utils.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(public http: HttpClient, private utilsService: UtilsService) {}
  getItems() {
    return this.http.get(this.utilsService.getEnv('api') + '/items');
  }
}
