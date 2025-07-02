// push - adding the given element to the end of the list 
var arr = [1, 2, 3];
arr.push(4);
// console.log(arr);
// pop - deleting the last element in the list
var arr1 = [1, 2, 3];
arr1.pop();
// console.log(arr1);
// unshift - adding one or more elements to the  begining of the list
var arr2 = [2, 3];
arr2.unshift(1);
// console.log(arr2);
// slice - returns a new array containing the elements at the given indices, without modifying the original array.
var arr3 = [1, 2, 3, 4];
var newList = arr3.slice(1, 3);
// console.log(newList);
// forEach - executes the given function for each element of the array.
var arr4 = [1, 2, 3];
arr4.forEach(function (el) { return printElement(el); });
function printElement(element) {
    // console.log(element);
}
// map - creates a new array by transforming each element of the original array using the given function.
var arr5 = [1, 2, 3, 4];
var doubled = arr5.map(function (el) { return el * 2; });
// console.log(doubled);
// filter - creates a new array containing only those elements that satisfy the condition.
var arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 22];
var even = arr6.filter(function (x) { return x % 2 == 0; });
// console.log(even);
// reduce - applies a function to each element of an array to produce a single final value.
var arr7 = [1, 2, 3, 4, 5];
var sum = arr7.reduce(function (acc, curr) { return acc + curr; }, 0);
// console.log(sum);
// every - checks whether all elements of an array satisfy a condition.
var arr8 = [2, 4, 6];
var allEven = arr8.every(function (x) { return x % 2 == 0; });
// console.log(allEven);
// index - returns the index of the first element found, or -1 if the element is not found.
var arr9 = [10, 20, 30];
var indexed = arr9.indexOf(30);
var indexed1 = arr9.indexOf(40);
// console.log(indexed);
// console.log(indexed1);
// const arr10 = [1, 2, 3, 4, 5, 6];
// const found = arr10.find(x => x > 3);
// console.log(found);
