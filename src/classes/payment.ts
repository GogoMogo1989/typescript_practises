import {HasFormatter} from '../interfaces/hasformatter.js'

export class Payments implements HasFormatter{
    constructor(
        public recipent: string,
        private details: string,
        readonly amount: number,
    ){}

    format(){
        return`${this.recipent} is owed Ł${this.amount} for ${this.details}`
    }
}