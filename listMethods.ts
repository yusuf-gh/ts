

// push - adding the given element to the end of the list 
const arr = [1, 2, 3];
arr.push(4);
// console.log(arr);


// pop - deleting the last element in the list
const arr1 = [1, 2, 3];
arr1.pop();
// console.log(arr1);


// unshift - adding one or more elements to the  begining of the list
const arr2 = [2, 3];
arr2.unshift(1);
// console.log(arr2);


// slice - returns a new array containing the elements at the given indices, without modifying the original array.
const arr3 = [1, 2, 3, 4];
const newList = arr3.slice(1, 3);
// console.log(newList);



// forEach - executes the given function for each element of the array.
const arr4 = [1, 2, 3];
arr4.forEach((el) => printElement(el));
function printElement(element: number): any {
    // console.log(element);
}



// map - creates a new array by transforming each element of the original array using the given function.
const arr5 = [1, 2, 3, 4]
const doubled = arr5.map((el) => el * 2);
// console.log(doubled);



// filter - creates a new array containing only those elements that satisfy the condition.
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 22];
const even = arr6.filter((x) => x % 2 == 0);
// console.log(even);



// reduce - applies a function to each element of an array to produce a single final value.
const arr7 = [1, 2, 3, 4, 5];
const sum = arr7.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);




// every - checks whether all elements of an array satisfy a condition.
const arr8 = [2, 4, 6];
const allEven = arr8.every((x) => x % 2 == 0);
// console.log(allEven);



// index - returns the index of the first element found, or -1 if the element is not found.
const arr9 = [10, 20, 30];
const indexed = arr9.indexOf(30);
const indexed1 = arr9.indexOf(40);
// console.log(indexed);
// console.log(indexed1);


// const arr10 = [1, 2, 3, 4, 5, 6];
// const found = arr10.find(x => x > 3);
// console.log(found);

















