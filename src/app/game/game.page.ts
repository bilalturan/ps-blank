import { Component, OnInit } from '@angular/core';
//import {  ViewChild } from '@angular/core';
//import { InfiniteScroll } from '@ionic/angular';

import { WordTypes } from '../word-types.enum';
import { Router } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  wordTypes = WordTypes;
  todos: any[];
  date: string;

  //@ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(private router: Router, private todoService: TodosService) {}

  goToHome() {
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
    this.date = new Date().toISOString();
    this.todoService.getTodos().subscribe(response => this.todos = <any[]>response);
  }

  // loadData(event) {
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();

  //     // App logic to determine if all data is loaded
  //     // and disable the infinite scroll
  //     if (this.todos.length === 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  // toggleInfiniteScroll() {
  //   //infiniteScroll.disabled = !infiniteScroll.disabled;
  // }

}
