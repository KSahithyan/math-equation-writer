import { ButtonObj, Section } from './data-types';
import { all, allSections } from './buttons';

const $ = (id: string) => document.getElementById(id);
const urlFormat = (value: string, isInline = false, color: string = 'black') => `https://math.now.sh/?${isInline ? 'inline': 'from'}=${value}&color=${color}`

export class App {
  input: string = `\\sum_{x=1}^{3} x^2`;
  imageUrl: string = ''
  allButtons = all;
  theme: "dark" | "light" = "light";
  inlineToggle: boolean = false;
  // buttons: ButtonObj[] = Object.values(all).reduce((prev, curr) => prev.concat(curr), [])
  sections: Section[] = allSections
  applyTheme = () => {
    document.body.setAttribute('theme', this.theme)
  }

  constructor() {
    this.setImageUrl = this.setImageUrl.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.applyTheme();
    // this.setImageUrl()
  }

  addValue(value, event) {
    let inputTag = <HTMLInputElement>$('input');

    // let direction = inputTag.selectionDirection
    let start = inputTag.selectionStart || this.input.length
    let end = inputTag.selectionEnd || this.input.length
    console.log({start, end, length: this.input.length})

    this.input = this.input.slice(0, start) + value + this.input.slice(end)    
  }

  changeTheme() {
    this.theme = this.theme == "dark" ? "light" : "dark"
    this.applyTheme()
  }

  clearInput() {
    this.input = '';
  }

  setImageUrl() {
    this.imageUrl = urlFormat(this.input.replace('+', '%2B'), this.inlineToggle);//, this.theme == "dark" ? "white" : "black")
  }
}
