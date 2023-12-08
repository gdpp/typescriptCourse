export class Person {
    // public name: string;
    // public country: string;

    constructor(
        private name: string = 'Tony', 
        private country: string = 'New York'){
        // this.name = name;
        // this.country = country;
    }
}

export class Hero extends Person{
    
    constructor(
        public alterEgo: string, 
        public age: number, 
        public realName: string){
        super('Gustavo', 'Mexico')
    }
}

const ironman = new Person('Tony Stark', 'EUA');

