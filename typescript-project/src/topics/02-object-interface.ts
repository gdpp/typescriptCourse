const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const garen: Character = {
    name: 'Garen',
    hp: 3000,
    skills: ['Destiny Final', 'Spin to win', 'Running Running']
}

garen.hometown = 'Demacia';

console.table(garen)

export {}