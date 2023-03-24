"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'Gustavo',
    email: 'gus@mail.dev',
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isActive;
}
var newUser = { name: 'Daniel', isActive: true, email: 'g@mail.dev' };
createUser(newUser);
function createCourse() {
    return { name: 'Typescript', price: 3.99 };
}
// type MyStr = string;
function CreateUser(user) {
    return { name: '', email: '', isActive: true };
}
CreateUser({ name: '', email: '', isActive: true });
var myCourse = {
    _id: crypto.randomUUID.toString(),
    name: 'React Course',
    price: 9.99,
    tags: ['frontend', 'framework', 'javascript'],
};
var myCourse2 = {
    _id: crypto.randomUUID.toString(),
    name: 'Python Course',
    price: 39.99,
    tags: ['programming_language', 'data_analysis', 'backend'],
    discountCoupon: true,
};
