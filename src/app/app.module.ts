import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { OktaAuthModule} from '@okta/okta-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OktaCallbackComponent } from './okta-callback/okta-callback.component';

const config = {
  issuer: 'https://dev-527294.oktapreview.com/oauth2/Idp',
  // redirectUri: 'http://localhost:8100/implicit/callback',
  redirectUri: 'http://192.168.0.33:8100/implicit/callback',
  clientId: '0oaij3hbwjDjHi6ti0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    OktaCallbackComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    OktaAuthModule.initAuth(config),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
