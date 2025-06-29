var username = "John";
var age = 20;
function greeting(username, age) {
    var myage = 21;
    if (age == myage) {
        return "\u041F\u0440\u0438\u0432\u0435\u0442 ".concat(username, ", \u0432\u0438\u0436\u0443 \u0442\u0435\u0431\u0435 \u0435\u0441\u0442\u044C ").concat(age, ", \u043C\u043D\u0435 \u0442\u043E\u0436\u0435!");
    }
    else {
        return "\u041F\u0440\u0438\u0432\u0435\u0442 ".concat(username, ", \u0432\u0438\u0436\u0443 \u0442\u0435\u0431\u0435 \u0435\u0441\u0442\u044C ").concat(age, ", a \u043C\u043D\u0435 21");
    }
}
// console.log(greeting(username, age));
/////////////////////////////////////////////////
// Привет John, вижу тебе есть 20, a мне 21    //
/////////////////////////////////////////////////
//--------------------------------------------------------------------------------------------------------------------
var price = 99.80;
var myCash = 130;
function buy(price, myCash) {
    if (myCash >= price) {
        return "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443, \u0432\u044B \u0437\u0430\u043F\u043B\u0430\u0442\u0438\u043B\u0438 ".concat(price, "$, \u0438 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C ").concat((myCash - price).toFixed(2), "$.\n\u0425\u043E\u0440\u043E\u0448\u0435\u0433\u043E \u0434\u043D\u044F!");
    }
    else {
        return "\u0412\u0430\u043C \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 ".concat((price - myCash).toFixed(2), "$!");
    }
}
// console.log(buy(price, myCash));
///////////////////////////////////////////////////////////////////////
// Спасибо за покупку, вы заплатили 99.8$, и у вас осталось 30.20$.  //
// Хорошего дня!                                                     //
///////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------------------------------------------------------
var isPremium = false;
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
var token = "abc123";
token = "1234567890qwertyuiop";
function isAuthentificated(userToken) {
    if (!userToken)
        return "Пользователя нет!";
    return "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(userToken);
}
var book = {
    title: "Hurry Potter",
    pages: 954,
    available: false
};
function printBook(b) {
    var status = b.available ? "доступно!" : "не доступно!";
    return "\u041A\u043D\u0438\u0433\u0430 ".concat(b.title, ", ").concat(b.pages, " \u0441\u0442\u0440\u0430\u043D\u0438\u0446 - ").concat(status);
}
var bookList = [
    { title: "Что то там крч", pages: 213 },
    { title: "Что то", pages: 313 },
    { title: "там крч", pages: 156 },
];
function listBooks(books) {
    var result = "";
    books.forEach(function (book, index) {
        result += "".concat(index + 1, ": ").concat(book.title, " - ").concat(book.pages, "\n");
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
    var current = n;
    return function () {
        return current++;
    };
}
function runCalls(n, calls) {
    var counter = createCounter(n);
    var result = [];
    for (var _i = 0, calls_1 = calls; _i < calls_1.length; _i++) {
        var c = calls_1[_i];
        if (c === "call") {
            result.push(counter());
        }
    }
    return result;
}
console.log(runCalls(10, ["call", "call", "call"]));
