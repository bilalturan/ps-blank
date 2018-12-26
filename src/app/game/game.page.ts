import { Component, OnInit } from "@angular/core";
//import {  ViewChild } from '@angular/core';
//import { InfiniteScroll } from '@ionic/angular';

import { WordTypes } from "../word-types.enum";
import { Router } from "@angular/router";
import { TodosService } from "../todos.service";
import { NewsapiService } from "../newsapi.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UsersApiService } from "../users-api.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"]
})
export class GamePage implements OnInit {
  wordTypes = WordTypes;
  todos: any[];
  date: string;
  news: any[];
  users: any[];

  page = 1;
  totalItems = 0;
  maxUserPages = 5;

  //@ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(
    private router: Router,
    private userApi: UsersApiService,
    private newsService: NewsapiService
  ) {}

  goToHome() {
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    this.date = new Date().toISOString();
    // this.newsService.getNews(this.page).subscribe(response => {
    //   this.totalItems = response.totalResults;
    //   this.news = <any[]>response.articles;
    // });

    this.userApi.getUsers(this.page).subscribe(response => {
      this.users = <any[]>response;
    });
  }

  // loadMoreNews(event) {
  //   console.log(event);

  //   this.page++;
  //   this.newsService
  //     .getNews(this.page)
  //     .pipe(map(resp => (<any>resp).articles))
  //     .subscribe(response => {
  //       event.target.complete();
  //       this.news = this.news.concat(<any[]>response);

  //       if (this.news && this.news.length === this.totalItems) {
  //         event.target.disabled = true;
  //       }
  //     });
  // }

  loadMoreUsers(event) {
    console.log(event);

    this.page++;
    this.userApi
      .getUsers(this.page)
      .subscribe(response => {
        event.target.complete();
        this.users = this.users.concat(<any[]>response);

        if (this.page === this.maxUserPages) {
          event.target.disabled = true;
        }
      });
  }

  // toggleInfiniteScroll() {
  //   //infiniteScroll.disabled = !infiniteScroll.disabled;
  // }
}
