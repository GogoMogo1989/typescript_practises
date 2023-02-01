/* let greet = Function; */

let greet: (a: string, b: string) => void;
greet = (name: string, greating: string) => {
    console.log(`${name} says ${greating}`)
}

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action:string ): number => {
    if( action ==='add'){
        return numOne+numTwo
    } else {
        return numOne - numTwo
    }
}