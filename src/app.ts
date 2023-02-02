class Invoice {
    constructor(
        public client: string,
        private details: string,
        readonly amount: number,
    ){}

    format(){
        return`${this.client} owes Ł${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'work on the mario website', 250)
const invTwo = new Invoice('luigi', 'work on the luigi website', 300)



let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;


const type = document.querySelector('#type')! as HTMLSelectElement;
const toform = document.querySelector('#tofrom')! as HTMLInputElement;
const details = document.querySelector('#details')! as HTMLInputElement;
const amount = document.querySelector('#amount')! as HTMLInputElement;



form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    console.log(
        type.value,
        toform.value,
        details.value,
        amount.valueAsNumber
    )
})


