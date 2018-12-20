import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NewsapiService {
  pageSize = 10;
  total = 0;

  constructor(private http: HttpClient) {}

  getNews(page: number): Observable<any> {

    return this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=19955438a2384067bfa7ac5f685fad95&pageSize=${this.pageSize}&page=${page}`
      )
      .pipe(
        tap(response => {
          console.log(response);
          const resp = <any>response;
          this.total = resp.totalResults;

          console.log(+ (page * this.pageSize) + " of " + this.total);

          const articles = <any[]>resp.articles;
          if (articles[0] && articles[0].source) {
            console.log(articles[0].source.id);
          }
        })
      );
  }
}
