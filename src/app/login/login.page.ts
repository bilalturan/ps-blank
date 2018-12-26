import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  isAuthenticated: boolean;

  constructor(private router: Router,
    public oktaAuth: OktaAuthService,
    private _loadingController: LoadingController) {
      this.oktaAuth.$authenticationState.subscribe(
        (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
      );
    }

  goToGame() {
    this.router.navigate(["/game"]);
  }

  async ngOnInit() {
    // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.loginRedirect('/game');
  }

  logout() {
    this.oktaAuth.logout('/login');
  }

  async presentLoading() {
    const loading = await this._loadingController.create({
      //spinner: null,
      duration: 500000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    return await loading.present();
  }
}
