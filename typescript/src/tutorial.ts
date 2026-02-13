// console.log('typescript tutorial');
// // interface someValueq{
// //     name: string;
// //     id: number;
// // }

// // let someObj: someValueq = {
// //     name: 'random',
// //     id: 123,
// // }   

// // console.log(someObj);

// // let awesomeName = 'shakeAndBake';
// // awesomeName = 'something';
// // awesomeName = awesomeName.toUpperCase();
// // console.log(awesomeName);

// // // awesomeName = 20;

// // let amount = 100;
// // amount = 12 - 1;
// // // amount = "pants";

// // let isAwesome = true;
// // isAwesome = false;
// // // isAwesome = 0;

// let greeting: string = 'Hello, TypeScript!';
// greeting = greeting.toUpperCase();
// console.log(greeting);

// let age: number = 30;
// age = age + 5;
// console.log(age);

// let isAdult: boolean = age >= 18;
// isAdult = !isAdult;
// console.log(isAdult);

// // greeting = 10;
// // age = 'thirty';
// // isAdult = 'yes';

// console.log(greeting, age, isAdult);

// | refers to union types, which allow a variable to hold values of multiple types. 
// In this case, tax can be either a number or a string. 
// This is useful when you want to allow for different types of values while still maintaining type safety.
// let tax: number | string = 10;  
// tax = 100;
// tax = '$10'; 

// // We cn set the type of a variable to a specific set of string literals, 
// // which is known as a string literal type. 
// let requestStatus: 'pending' | 'success' | 'error' = 'pending' ;

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false; 

// let random;

// const Book = ['1985', 'To Kill a Mockingbird', 'The Great Gatsby'];

// foundBook is not defined  because it is declared inside the for loop 
// and is not accessible outside of it.
// let foundBook: string | undefined;;

// for (const book of Book) {
//     if (book === '1985') {
//         foundBook = book;
//         foundBook = foundBook.toUpperCase();
//         break;
//     }
// }
//     console.log(foundBook);

// let discount: number | undefined; 

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'; 

// Array
let number: number[] = [1,2,3,4,5];

let fruit: string[] = ['apple', 'banana', 'orange', 'grape', 'mango' ];

let emptyValues: number[]  = [];

let name = ["Masahiro", "Togasaki", "John", 2];
let array: (string | boolean)[] = ["Banana", true, "Strawberry", false,];