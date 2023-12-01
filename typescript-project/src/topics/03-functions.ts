function addNumbers(a: number, b: number){
    return a + b;
}

const addNumbersArrow = (x: number, y: number): string => {
    return (x + y).toString();
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 4){
    return firstNumber * base;
}

// const res: number = addNumbers(1, 2);
// const result : string = addNumbersArrow(2, 3);
// const multiplyResult: number = multiply(5);

// console.log({
//     res,
//     result,
//     multiplyResult
// });

interface Character{
    name: string;
    hp: string;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const jinx: Character = {
    name: 'Jinx',
    hp: 200,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`)
    }
} 

healCharacter(jinx, 150);

jinx.showHp();

export {}