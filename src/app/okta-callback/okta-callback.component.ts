import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-okta-callback',
  templateUrl: './okta-callback.component.html',
  styleUrls: ['./okta-callback.component.scss']
})
export class OktaCallbackComponent implements OnInit {

  constructor() {
    console.log("OktaCallbackComponent constructor()");
  }

  ngOnInit() {
    console.log("OktaCallbackComponent ngOnInit()");
  }

}
