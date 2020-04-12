import { LightningElement,api } from 'lwc';


export default class HelloWorld extends LightningElement {
    @api greeting = 'World';
    
    get greetingUpper() {
        return this.greeting.toUpperCase();
    }

    constructor() {
        super();
        window.HelloWorld = 'Hello World';
    }

    changeHandler(event) {
        this.greeting = event.target.value;
    }
}