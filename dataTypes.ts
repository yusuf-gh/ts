

const username: string = "John";
const age: number = 20;

function greeting(username: string, age: number): string {
    const myage: number = 21;
    if (age == myage){
        return `Привет ${username}, вижу тебе есть ${age}, мне тоже!`
    } else {
        return `Привет ${username}, вижу тебе есть ${age}, a мне 21`
    }
}
// console.log(greeting(username, age));

/////////////////////////////////////////////////
// Привет John, вижу тебе есть 20, a мне 21    //
/////////////////////////////////////////////////



//--------------------------------------------------------------------------------------------------------------------

const price: number = 99.80;
const myCash: number = 130;
function buy(price: number, myCash: number): string {
    if (myCash >= price){
        return `Спасибо за покупку, вы заплатили ${price}$, и у вас осталось ${(myCash - price).toFixed(2)}$.\nХорошего дня!`
    } else {
        return `Вам не хватает ${(price - myCash).toFixed(2)}$!`
    }
}

// console.log(buy(price, myCash));

///////////////////////////////////////////////////////////////////////
// Спасибо за покупку, вы заплатили 99.8$, и у вас осталось 30.20$.  //
// Хорошего дня!                                                     //
///////////////////////////////////////////////////////////////////////



//--------------------------------------------------------------------------------------------------------------------


const isPremium: boolean = false;

function premiumCheck(userPremium: boolean): string {
    if (userPremium){
        return "Спасибо, вы премиум-пользователь!"
    } else {
        return "Обновите до премиума."
    }
}

// console.log(premiumCheck(isPremium));

/////////////////////////////
// Обновите до премиума.   //
/////////////////////////////



//--------------------------------------------------------------------------------------------------------------------


let token: string | null = "abc123"
token = "1234567890qwertyuiop"

function isAuthentificated(userToken: string | null): string {
    if (!userToken) return "Пользователя нет!"
    return `Пользователь ${userToken}`
}

// console.log(isAuthentificated(token));



///////////////////////////////////////////
// Пользователь 1234567890qwertyuiop     //
///////////////////////////////////////////



//--------------------------------------------------------------------------------------------------------------------

interface Book {
    title: string;
    pages: number;
    available: boolean;
}

const book: Book = {
    title: "Hurry Potter",
    pages: 954,
    available: false
};

function printBook(b: Book): string {
    const status = b.available ? "доступно!" : "не доступно!";
    return `Книга ${b.title}, ${b.pages} страниц - ${status}`
}

// console.log(printBook(book));



//////////////////////////////////////////////////////
// Книга Hurry Potter, 954 страниц - не доступно!   //
//////////////////////////////////////////////////////



//--------------------------------------------------------------------------------------------------------------------


type Books = {
    title: string;
    pages: number;
}

const bookList: Array<Books> = [
    {title: "Что то там крч", pages: 213},
    {title: "Что то", pages: 313},
    {title: "там крч", pages: 156},
];

function listBooks(books: Array<Books>): string {
    let result = "";
    books.forEach((book, index) => {
        result += `${index + 1}: ${book.title} - ${book.pages}\n`
    });
    return result

}

// console.log(listBooks(bookList));



///////////////////////////////
// 1: Что то там крч - 213   //
// 2: Что то - 313           //
// 3: там крч - 156          //
///////////////////////////////


