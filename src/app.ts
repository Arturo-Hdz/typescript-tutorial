// interface
interface IsPerson{
    name:string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Shaun',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spend', amount);
        return amount;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);
console.log(me);

// ------------ interface ------------

import { Invoice } from "./classes/Invoice.js";
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payments(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end');

    console.log(doc);

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    );
})

