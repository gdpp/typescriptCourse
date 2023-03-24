const User = {
    name: 'Gustavo',
    email: 'gus@mail.dev',
    isActive: true,
};

function createUser({ name: string, isActive: boolean }) {}

let newUser = { name: 'Daniel', isActive: true, email: 'g@mail.dev' };

createUser(newUser);

function createCourse(): { name: string; price: number } {
    return { name: 'Typescript', price: 3.99 };
}

type User = {
    name: string;
    email: string;
    isActive: boolean;
};

// type MyStr = string;

function CreateUser(user: User) {
    return { name: '', email: '', isActive: true };
}

CreateUser({ name: '', email: '', isActive: true });

type Course = {
    readonly _id: string;
    name: string;
    price: number;
    tags: Array<string>;
    discountCoupon?: boolean;
};

let myCourse: Course = {
    _id: crypto.randomUUID.toString(),
    name: 'React Course',
    price: 9.99,
    tags: ['frontend', 'framework', 'javascript'],
};

let myCourse2: Course = {
    _id: crypto.randomUUID.toString(),
    name: 'Python Course',
    price: 39.99,
    tags: ['programming_language', 'data_analysis', 'backend'],
    discountCoupon: true,
};

export {};
