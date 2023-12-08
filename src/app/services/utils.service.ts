import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as jsonData from '../../../env.json';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(public http: HttpClient) {}
  getEnvs() {
    return jsonData;
  }
  getEnv(env: string) {
    return (jsonData as any)[env];
  }
}
