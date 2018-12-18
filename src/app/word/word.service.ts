import { Injectable } from "@angular/core";
import { WordTypes } from "../word-types.enum";
import { IWord } from "../iword";

@Injectable({
  providedIn: "root"
})
export class WordService {
  words: Map<WordTypes, string[]>;

  constructor() {
    this.words = new Map<WordTypes, string[]>([[WordTypes.Noun, []]]);
  }

  getWord(type: WordTypes): IWord {
    const words: string[] = this.words.get(type);

    const numWords = words.length;
    const wordPosition = Math.floor(Math.random() * numWords);

    return {
      part: type,
      label: words[wordPosition]
    };
  }
}
