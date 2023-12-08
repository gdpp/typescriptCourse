export function whatsMyType<T>(argument: T): T{
    return argument;
}

const amIString = whatsMyType<string>('Hello, World!');
const amINumber = whatsMyType<number>(300);
const amIArray = whatsMyType<number[]>([1, 2, 3]);

console.log(amIString)
console.log(amINumber)
console.log(amIArray)
