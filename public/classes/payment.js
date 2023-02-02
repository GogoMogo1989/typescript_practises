export class Payments {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} is owed Ł${this.amount} for ${this.details}`;
    }
}
