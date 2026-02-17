// // console.log('typescript tutorial');
// // // interface someValueq{
// // //     name: string;
// // //     id: number;
// // // }

// // // let someObj: someValueq = {
// // //     name: 'random',
// // //     id: 123,
// // // }   

// // // console.log(someObj);

// // // let awesomeName = 'shakeAndBake';
// // // awesomeName = 'something';
// // // awesomeName = awesomeName.toUpperCase();
// // // console.log(awesomeName);

// // // // awesomeName = 20;

// // // let amount = 100;
// // // amount = 12 - 1;
// // // // amount = "pants";

// // // let isAwesome = true;
// // // isAwesome = false;
// // // // isAwesome = 0;

// // let greeting: string = 'Hello, TypeScript!';
// // greeting = greeting.toUpperCase();
// // console.log(greeting);

// // let age: number = 30;
// // age = age + 5;
// // console.log(age);

// // let isAdult: boolean = age >= 18;
// // isAdult = !isAdult;
// // console.log(isAdult);

// // // greeting = 10;
// // // age = 'thirty';
// // // isAdult = 'yes';

// // console.log(greeting, age, isAdult);

// // | refers to union types, which allow a variable to hold values of multiple types. 
// // In this case, tax can be either a number or a string. 
// // This is useful when you want to allow for different types of values while still maintaining type safety.
// // let tax: number | string = 10;  
// // tax = 100;
// // tax = '$10'; 

// // // We cn set the type of a variable to a specific set of string literals, 
// // // which is known as a string literal type. 
// // let requestStatus: 'pending' | 'success' | 'error' = 'pending' ;

// // let notSure: any = 4;
// // notSure = 'maybe a string instead';
// // notSure = false; 

// // let random;

// // const Book = ['1985', 'To Kill a Mockingbird', 'The Great Gatsby'];

// // foundBook is not defined  because it is declared inside the for loop 
// // and is not accessible outside of it.
// // let foundBook: string | undefined;;

// // for (const book of Book) {
// //     if (book === '1985') {
// //         foundBook = book;
// //         foundBook = foundBook.toUpperCase();
// //         break;
// //     }
// // }
// //     console.log(foundBook);

// // let discount: number | undefined; 

// // let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'; 

// // Array
// // let number: number[] = [1,2,3,4,5];

// // let fruit: string[] = ['apple', 'banana', 'orange', 'grape', 'mango' ];

// // let emptyValues: number[]  = [];

// // let names = ["Masahiro", "Togasaki", "John", 2];
// // let array: (string | boolean)[] = ["Banana", true, "Strawberry", false,];

// // let temperatures: number [] = [30, 25, 28, 32, 27];

// // let colors: string [] = ['red', 'green', 'blue', 'yellow', 'purple'];
// // // colors.push(true);

// // let mixedArray: (number | string)[] = [1, 'two', 3, 'four', 5];

// // // Objects
// // let car: { brand: string; year: number} = { brand: 'toyota', year: 2020};
// // car.brand = 'suzuki';
// // // car.color = 'red';

// // let car1: { brand: string; year: number} = { brand: 'audi', year: 2026};

// // let book = {title: 'book', cost: 20}
// // let pen = {title: 'pen', cost: 10}
// // let notebook = {title: 'notebook', cost: 15}

// // let items:{readonly title:string; cost: number} [] = [book, pen, notebook];
// // // items{0}.title = 'new book';

// // let bike: {brand: string; year: number} = {brand: 'yamaha', year: 2010}
// // // bike.year= 'old';
// // let laptop: {brand: string; year: number} = {brand: 'lenovo', year: 2010}
// // // let laptop2: {brand: string; year: number} = {brand: 'Panasonic', year: 2010}

// // let product1 = {title: 'shirt', price: 20}
// // let product2 = {title: 'pants', price: 30}
// // // ?: makes the price property optional, meaning that it may or may not be present in the objects of the products array.
// // let products: {title: string; price?: number} [] = [product1, product2]

// // products.push({title: 'shoes'})

// //　Function

// // function sayHi(name: string) {
// //     console.log(`Hi, ${name.toUpperCase()}!`);

// // }

// // // - any
// // // - config
// // // - type

// // sayHi('Masahiro');

// function calculateDiscount(price:number): number {
//     const hasDiscount = true;

//     if(hasDiscount){
//         return price;
//         // return 'Discount Applied';
//     }
    
//     return price * 0.9;
// }

// const finalPrice = calculateDiscount(100);

// function addThree (number:any){
//     let anotherNumber:number = 3;
//     return number + anotherNumber;
// }

// const result = addThree(3);
// const someValue = result;

// someValue.myMethod();

// const names: string[] = ['Jack', 'James', 'Charlie'];

// function isNameInList(name: string): boolean {
//     return names.includes(name);
// }

// let nameToCheck = 'John';

// if (isNameInList(nameToCheck)) {
//     console.log(`${nameToCheck} is in the list.`);
// } else {
//     console.log(`${nameToCheck} is not in the list.`);
// }

// function calculatePrice(price:number,discount?:number): number {
//     return price -(discount|| 0);
// }

// let priceAfterDiscount = calculatePrice(100, 20);

// function calculateTotal(initialScore:number, penaltyPoints:number = 0): number {
//     return initialScore - penaltyPoints;
// }

// let scoreAfterPenalty = calculateTotal(100, 20);
// let scoreWithoutPenalty = calculateTotal(300);

// Rest Parameter
// function sum (message:string,...numbers:number[]): string {
//     const doubled = numbers.map ((num)=> num * 2);
//     console.log(doubled);

//     let total = numbers.reduce((previous, current)=>{
//         return previous + current
//     }, 0)
//     return `${message} ${total}`;

// }

// let result = sum('The total is : ', 1,2,3,4,5);
// console.log(result);