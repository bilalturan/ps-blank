import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UsersApiService } from "../users-api.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.page.html",
  styleUrls: ["./game.page.scss"]
})
export class GamePage implements OnInit {

  users: any[];

  page = 1;
  totalItems = 0;
  maxUserPages = 5;

  constructor(
    private router: Router,
    private userApi: UsersApiService
  ) {}

  goToHome() {
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    //this.date = new Date().toISOString();
    this.userApi.getUsers(this.page).subscribe(response => {
      this.users = <any[]>response;
    });
  }

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
}
