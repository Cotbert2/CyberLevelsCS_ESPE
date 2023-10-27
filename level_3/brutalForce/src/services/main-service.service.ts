import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(
    private httpClient : HttpClient
  ) { }
  
  getRandomNumber() : Observable<any> {
    //http://localhost:8080/api/getRandomNum
    return this.httpClient.get("http://localhost:8080/api/getRandomNum");
  }
}
