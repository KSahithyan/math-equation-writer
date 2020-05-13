import { bindable } from 'aurelia-framework';
import { App } from 'app';
import { Context } from 'vm';

export class CustomButton {
    @bindable text: string = ''
    @bindable value: string = ''
    @bindable clickListener: EventListener
    @bindable class: string = ''
    @bindable parentClass: string = ''
    @bindable data: any = null
    @bindable description: string = null

    bind(bindingContext: App, overrideContext: Context) {
        let parentContext = overrideContext.parentOverrideContext ? overrideContext.parentOverrideContext.parentOverrideContext.parentOverrideContext.bindingContext : bindingContext
        if (this.data) {
            this.description = this.data.description
            this.text = this.data.text
            this.value = this.data.value
        }
        if (!this.clickListener) {
            this.clickListener = (<Function>parentContext.addValue).bind(parentContext, this.value)
            // console.log(this.clickListener) 
        }
        // console.log(bindingContext, overrideContext)
    }
}