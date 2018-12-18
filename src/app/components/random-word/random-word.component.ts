import { Component, OnInit, Input } from '@angular/core';
import { IWord } from 'src/app/iword';
import { WordTypes } from 'src/app/word-types.enum';
import { WordService } from 'src/app/word/word.service';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.scss']
})
export class RandomWordComponent implements OnInit {

  @Input() type: WordTypes;
  word: IWord;

  constructor(public wordsService: WordService) { }

  ngOnInit() {
    this.word = this.wordsService.getWord(this.type);
  }

}
