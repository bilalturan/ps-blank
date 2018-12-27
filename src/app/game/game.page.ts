import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UsersApiService } from "../users-api.service";
import { LoadingController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

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
    private userApi: UsersApiService,
    private _loadingController: LoadingController,
    private translate: TranslateService
  ) {}

  goToHome() {
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    // this.date = new Date().toISOString();

    this._loadingController.create({
      message: this.translate.instant('PleaseWait')
    }).then(loadingProgress => loadingProgress.present());

    this.userApi.getUsers(this.page).subscribe(
      response => {
        this.users = <any[]>response;
        this._loadingController.dismiss();
      },
      err => {
        this._loadingController.dismiss();
      }
    );
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
