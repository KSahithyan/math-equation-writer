const $ = (id: string) => document.getElementById(id);

const urlFormat = (value: string, format = 'svg') => `https://math.now.sh/?from=${value}`
export class App {
  // input: string = String.raw`\frac{-b\pm\sqrt{b^2-4ac}}{2a}`;
  _input: string = ''
  imageUrl: string = ''

  set input(n) {
    this._input = n
  }
  get input() { return this._input }

  constructor() {
    this.input = String.raw`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`;
    this.setImageUrl()
  }

  setImageUrl() {
    this.imageUrl = urlFormat(this.input)
  }
}
