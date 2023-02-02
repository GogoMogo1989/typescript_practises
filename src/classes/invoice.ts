export class Invoice {
    constructor(
        public client: string,
        private details: string,
        readonly amount: number,
    ){}

    format(){
        return`${this.client} owes Ł${this.amount} for ${this.details}`
    }
}