function addTwo(num: number) {
    return num + 2;
}

addTwo(5);

function getUpper(value: string) {
    return value.toUpperCase();
}

getUpper('test');

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser('Gustavo', 'gustavo@mail.com', true);

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser('h', 'h@mail.com');
loginUser('gus', 'gus@mail.com', true);

//Better Way To Write Functions in TS

function sayHello(name: string): string {
    return `Hello ${name}`;
}

// function getValue(myVal: number): string {
//     if (myVal > 5) {
//         return true;
//     }

//     return '200 OK';
// }

const getHello = (s: string): string => {
    return `${s}`;
};

// Switch implicit type
const heros = ['thor', 'spiderman', 'ironman'];
// const heros = [1, 2, 3];

heros.map((hero: string): string => {
    return `${hero} is a cool superhero`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
