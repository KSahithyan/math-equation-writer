import {ButtonObj, Section} from './data-types';
import { all } from './buttons';

const $ = (id: string) => document.getElementById(id);
const urlFormat = (value: string, format = 'svg') => `https://math.now.sh/?from=${value}`

export class App {
  input: string = String.raw`\frac{-b\pm\sqrt{b^2-4ac}}{2a}`;
  imageUrl: string = ''
  allButtons = all;
  // buttons: ButtonObj[] = Object.values(all).reduce((prev, curr) => prev.concat(curr), [])
  sections: Section[] = [
    { title: "Numbers", buttonSection: [all.numbers] },
    { title: "Alphabets - English", buttonSection: [all.englishAlphabetsCapitals, all.englishAlphabetsSmalls] },
    { title: "Alphabets - Greek", buttonSection: [all.greekAlphabetsSmalls, all.greekAlphabetsCapitals, all.greekAlphabetsExtensions] },
    { title: "Sets and logic", buttonSection: [all.setsAndLogic] },
  ]

  constructor() {
    this.setImageUrl = this.setImageUrl.bind(this)
    this.clearInput = this.clearInput.bind(this)
    // this.setImageUrl()
  }

  addValue(value, event) {
    let inputTag = <HTMLInputElement>$('input');

    // let direction = inputTag.selectionDirection
    let start = inputTag.selectionStart
    let end = inputTag.selectionEnd
    
    this.input = this.input.slice(0, start) + value + this.input.slice(end + 1)
    
  }

  clearInput() {
    console.log('www44s4', this)
    this.input = '';
  }

  setImageUrl() {
    console.log('wwwwow', this)
    this.imageUrl = urlFormat(this.input)
    console.log(this.imageUrl);
  }
}
