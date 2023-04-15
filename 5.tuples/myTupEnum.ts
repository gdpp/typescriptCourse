// Tuples
const user: (string | number)[] = [1, 'gp'];
let tUser: [string, number, boolean];

tUser = ['Gus', 31, true];

let rgb: [number, number, number];

rgb = [255, 128, 89];

type User = [number, string];

const newUser: User = [31, 'gp@mail.com'];

newUser[1] = 'hp@mail.com';
