const { User } = require('./user');

let vasya = new User('Вася');
let petya = new User('Петя');

petya.hello(vasya);