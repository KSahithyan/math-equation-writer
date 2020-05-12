import { bindable } from 'aurelia-framework';

export class CustomButton {
    @bindable text: string = ''
    @bindable onclick: EventListener
}