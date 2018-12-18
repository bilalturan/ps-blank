import { Component, OnInit } from '@angular/core';
import { WordTypes } from '../word-types.enum';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  wordTypes = WordTypes;

  constructor() { }

  ngOnInit() {

  }

}
