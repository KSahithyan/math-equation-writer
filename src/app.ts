import {ButtonObj, Section} from './data-types';
import { all } from './buttons';

const $ = (id: string) => document.getElementById(id);
const urlFormat = (value: string, format = 'svg') => `https://math.now.sh/?from=${value}`

export class App {
  input: string = ``;
  imageUrl: string = ''
  allButtons = all;
  // buttons: ButtonObj[] = Object.values(all).reduce((prev, curr) => prev.concat(curr), [])
  sections: Section[] = [
    { title: "Numbers", buttonSection: [all.numbers] },
    { title: "Alphabets - English", buttonSection: [all.englishAlphabetsCapitals, all.englishAlphabetsSmalls] },
    { title: "Alphabets - Greek", buttonSection: [all.greekAlphabetsSmalls, all.greekAlphabetsCapitals, all.greekAlphabetsExtensions] },
    { title: "Sets and logic", buttonSection: [all.setsAndLogic] },
    { title: "Others", buttonSection: [all.others] },
  ]

  constructor() {
    this.setImageUrl = this.setImageUrl.bind(this)
    this.clearInput = this.clearInput.bind(this)
    // this.setImageUrl()
  }

  // IMPORTANT
  // Test this feature.
  addValue(value, event) {
    let inputTag = <HTMLInputElement>$('input');

    // let direction = inputTag.selectionDirection
    let start = inputTag.selectionStart
    let end = inputTag.selectionEnd
    
    this.input = this.input.slice(0, start) + value + this.input.slice(end)
    
  }

  clearInput() {
    this.input = '';
  }

  setImageUrl() {
    this.imageUrl = urlFormat(this.input.replace('+', '%2B'))
  }
}
