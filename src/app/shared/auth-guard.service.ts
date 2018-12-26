import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  oktaAuth: OktaAuthService;

  constructor(private okta: OktaAuthService, private router: Router) {
        this.oktaAuth = okta;
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const authenticated = await this.oktaAuth.isAuthenticated();
    if (authenticated) {
      console.log("AuthGuard is authenticated == true");
      return true;
    }

    // Redirect to login flow.
    console.log("AuthGuard is authenticated == false");
    const path = state.url;
    this.oktaAuth.loginRedirect(path);
    return false;
  }
}
