import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rootURL = 'http://dummy.restapiexample.com/api/v1/employees'
  constructor(
    private http: HttpClient
  ) { }

  getEmployeDetails() {
      return this.http.get(this.rootURL).pipe(
        map((response: any) => {
          if(response && response.status == 'success')
            return response.data
        })
      );
  }
}
