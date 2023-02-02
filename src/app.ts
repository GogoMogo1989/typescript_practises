import { Payments } from './classes/payment.js';
import { Invoice } from './classes/invoice.js';
import { HasFormatter } from './interfaces/hasformatter.js';

/* let docOne : HasFormatter;
let docTwo : HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payments ('mario', 'plubing work', 200)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)


const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 300)



let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
}) */


const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type')! as HTMLSelectElement;
const toform = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;



form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if(type.value === "invoice"){
        doc = new Invoice(
            toform.value,
            details.value,
            amount.valueAsNumber
        )
    } else {
        doc = new Payments(
            toform.value,
            details.value,
            amount.valueAsNumber
        )
    }

    console.log(doc)
})


