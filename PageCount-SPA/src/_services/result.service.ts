import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { JwtHelperService } from '../../node_modules/@auth0/angular-jwt';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../_models/Result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  baseUrl = environment.apiURL + 'results/'
  jwtHelper = new JwtHelperService();
  decodedToken:any;

constructor(private http:HttpClient) { }

addPageCount(model: any) {
  return this.http.post(this.baseUrl + "add", model);
}

  getResult(id): Observable<Result> {
    return this.http.get<Result>(this.baseUrl + id);
}

getResults(): Observable<Result[]> {
  return this.http.get<Result[]>(this.baseUrl);
}

getResultsBydate(date):Observable<Result[]> {
  return this.http.get<Result[]>(this.baseUrl + "range/" + date)
}
}
