import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  pageSize = 20;

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {

    return this.http
      .get(
        `https://randomuser.me/api/?results=${this.pageSize}&page=${page}`
      )
      .pipe(
        tap(response => {
          console.log(response);
        }),
        map(src => (<any>src).results)
      );
  }
}
