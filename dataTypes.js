"use strict";
const username = "John";
const age = 20;
function greeting(username, age) {
    const myage = 21;
    if (age == myage) {
        return `Привет ${username}, вижу тебе есть ${age}, мне тоже!`;
    }
    else {
        return `Привет ${username}, вижу тебе есть ${age}, a мне 21`;
    }
}
// console.log(greeting(username, age));
/////////////////////////////////////////////////
// Привет John, вижу тебе есть 20, a мне 21    //
/////////////////////////////////////////////////
//--------------------------------------------------------------------------------------------------------------------
const price = 99.80;
const myCash = 130;
function buy(price, myCash) {
    if (myCash >= price) {
        return `Спасибо за покупку, вы заплатили ${price}$, и у вас осталось ${(myCash - price).toFixed(2)}$.\nХорошего дня!`;
    }
    else {
        return `Вам не хватает ${(price - myCash).toFixed(2)}$!`;
    }
}
// console.log(buy(price, myCash));
///////////////////////////////////////////////////////////////////////
// Спасибо за покупку, вы заплатили 99.8$, и у вас осталось 30.20$.  //
// Хорошего дня!                                                     //
///////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------------------------------------------------------
const isPremium = false;
function premiumCheck(userPremium) {
    if (userPremium) {
        return "Спасибо, вы премиум-пользователь!";
    }
    else {
        return "Обновите до премиума.";
    }
}
// console.log(premiumCheck(isPremium));
/////////////////////////////
// Обновите до премиума.   //
/////////////////////////////
//--------------------------------------------------------------------------------------------------------------------
let token = "abc123";
token = "1234567890qwertyuiop";
function isAuthentificated(userToken) {
    if (!userToken)
        return "Пользователя нет!";
    return `Пользователь ${userToken}`;
}
const book = {
    title: "Hurry Potter",
    pages: 954,
    available: false
};
function printBook(b) {
    const status = b.available ? "доступно!" : "не доступно!";
    return `Книга ${b.title}, ${b.pages} страниц - ${status}`;
}
const bookList = [
    { title: "Что то там крч", pages: 213 },
    { title: "Что то", pages: 313 },
    { title: "там крч", pages: 156 },
];
function listBooks(books) {
    let result = "";
    books.forEach((book, index) => {
        result += `${index + 1}: ${book.title} - ${book.pages}\n`;
    });
    return result;
}
// console.log(listBooks(bookList));
///////////////////////////////
// 1: Что то там крч - 213   //
// 2: Что то - 313           //
// 3: там крч - 156          //
///////////////////////////////
//--------------------------------------------------------------------------------------------------------------------
function createCounter(n) {
    let current = n;
    return function () {
        return current++;
    };
}
function runCalls(n, calls) {
    const counter = createCounter(n);
    const result = [];
    for (const c of calls) {
        if (c === "call") {
            result.push(counter());
        }
    }
    return result;
}
// console.log(runCalls(10, ["call", "call", "call"])); 
/////////////////////////////
// [ 10, 11, 12 ]          //
/////////////////////////////
