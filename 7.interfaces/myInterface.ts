interface Person {
    name: string;
}

interface User extends Person {
    readonly dbId: number;
    id: number;
    email: string;
    googleId?: string;
    // startTrail: () => string;
    startTrail(): string;
    getCoupon(couponName: string, value: number): number;
}

const gustavo: User = {
    dbId: 1,
    id: 111,
    name: 'Gustavo',
    email: 'gp@mail.com',
    startTrail: () => {
        return 'Trail Started...';
    },
    getCoupon: (name: 'freedev10', off: 25) => {
        return 25;
    },
};

gustavo.email = 'gdpp@test.com';
