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

// For when there is no returned value, what will be returned.
// function logMessage(message: string):void{
//     console.log(message);
    
// }

// logMessage('Hello, TypeScript!');


// Type Guards
// function processInput(input: number | string): void {
//     if(typeof input === 'number'){
//     console.log(input*2);
//     } else{
//     console.log(input.toUpperCase());
//     }
// }

// processInput(10)
// processInput('Hello')

// we have 2 carly braces, the first one is for the function parameter and 
// the second one is for the function return type.
// function createEmployee({id}:{id:number}):{id:number;isActive:boolean}{
//     return{id, isActive: id % 2 === 0};

// }

// const first = createEmployee({id: 1});
// const second = createEmployee({id: 2});
// console.log(first, second);

// // Alternative

// function createStudent(student:{id:number; name:string}):void{
//     console.log(`Welcome to the course, ${student.name.toUpperCase()}!!!`);

// }

// const newStudent = {
//     id: 5,
//     name: 'Masa',
//     email: 'masa@gmail.comf'
// };

// createStudent(newStudent);
// createStudent({id:1, name:'John', email: 'bobo@gmail.com'});


// function processData(input: string | number, config: {reverse?: boolean}=
//     // string | number is return type.
//     {reverse: false}): string | number {
//     if(typeof input === 'number'){
//         return input*input;
//     } else {
//         return config.reverse? input.toUpperCase().split('').reverse().join('') 
//         : input.toUpperCase();
//     }

// }

// console.log(processData(10));
// console.log(processData('Hello'));
// console.log(processData('Hello', {reverse: true}));

// Type Alias and Intersection Type
// Type Alias allows us to create a new name for a type, which can be a primitive,
//  an object, a union, or any other type.
// export type User = { id: number; name: string; isActive: boolean }

// const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user: User): User {
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);

//   return user;
// }
// type StringOrNumber = string | number;

// let value: StringOrNumber;
// value = 'Hello';
// value = 42;

// type Theme = 'light' | 'dark';

// let theme: Theme;
// theme = 'light';
// theme = 'dark';

// function setTheme(t:Theme){
//     theme = t;
// }

// setTheme('dark');

// type Employee = {
//     id: number;
//     name: string;
//     department: string;
// }

// type Manager = {id: number; name: string; employees: Employee[]}


// type Staff = Employee | Manager;

// function printStaffDetails(staff:Staff): void {
//     if('employees' in staff){
//         console.log(`${staff.name} is a manager, Department: ${staff.employees.length} employees`);
//     } else {
//         console.log(`${staff.name} is an employee, Employees: ${staff.department}`);
//     }
// }
// const alice: Employee = {id:1, name: 'Alice', department: 'Sales'};
// const steve: Employee = {id:2, name: 'Steve', department: 'HR'};


// const bob: Manager = {id:1, name: 'Bob', employees: [alice, steve]};


// printStaffDetails(alice);
// printStaffDetails(steve);
// printStaffDetails(bob);

// type Book = { id: number; title: string; price: number};



// const book1:Book = {
//     id: 1,
//     title: 'The Great Gatsby',
//     price: 10, 
// }

// const book2:Book = {
//     id: 2,
//     title: 'To Kill a Mockingbird',
//     price: 15, 
// }

// const discountedBook:Book & {discount: number} = {
//     id: 3,
//     title: 'To Kill a Mockingbird',
//     price: 12, 
//     discount:0.15,
// }

// const propName = 'age';

// type Animal = {
//     [propName]: number;
// }

// let tiger = {[propName]: 5};

// Interface - Fundamentals


// interface Book {
//     readonly isbn:number;
//     title:string;
//     author:string;
//     genre?:string;
//     //  method
//     printAuthor(): void;
//     printTitle(message: string): string;
//     printSomething: (someValue: number) => number;
// }


//  const deepWork: Book = {
//     isbn: 123,
//     title: 'deep work',
//     author: 'cal Newport',
//     genre: 'self-help',
//     // printAuthor(){
//     //     console.log(this.author);
//     // },
//     printTitle(message){
//         return `${this.title} ${message}`;
//     },
//     // first option
//     printSomething:function (someValue) {
//         return someValue;
//     },
//     // second option
//     // printSomething(someValue){
//     //     console.log(deepWork.author);
//     //     return someValue;
//     // }
//     // third option
//     // printSomething(someValue){
//     //     return someValue;
//     // }
//     printAuthor:() => {
//         console.log(deepWork.author);
//     },
//  }

//  console.log(deepWork.printSomething(134));
//  deepWork.printAuthor();

// Interface Foundamentals
// interface Computer{
//     readonly id:number;
//     brand:string;
//     ram:number;
//     upgradeRam(newRam:number): number;
//     storage?: number;
    
// }

// const laptop:Computer = {
//     id:1,
//     brand: 'random brand',
//     ram: 8,
//     upgradeRam(amount){
//         this.ram += amount;
//         return this.ram;
//     },
// };

// laptop.storage = 256;

// console.log(laptop.upgradeRam(4));
// console.log(laptop);

// Interface Advanceed
// interface Person {
//     name: string;
//     getDetails(): string;
// }

// interface DogOwner {
//     dogName: string;
//     getDogDetails(): string;
// }

// interface Person {
//     age: number;
// }

// const person: Person = {
//     name: 'Masa',
//     age: 30,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
// };
// const employee: Employee = {
//     name: 'Max',
//     age: 28,
//     employeeId: 12345,
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
//     },
// };

// interface Employee extends Person{
//     employeeId: number;
// }


// console.log(employee.getDetails());


// interface Manager extends Person, DogOwner{
//     managePeople():void;
// }

// const manager:Manager = {
//     name: 'bob',
//     age: 40,
//     dogName: 'Rex',
//     getDetails() {
//         return `Name: ${this.name}, Age: ${this.age}`;
//     },
//     getDogDetails() {
//         return `Dog Name: ${this.dogName}`;
//     },
//     managePeople(){
//         console.log(`Managing people...`);
//     }
// }

// manager.managePeople();

function getEmployee():Person | DogOwner | Manager {
    const random = Math.random()
    if(random < 0.33){
        return {
            name: 'Masa',
        }
    } else if(random < 0.66){
        return {
            name: 'John',
            dogName: 'Max',
        }
    } else {
        return {
            name: 'bob',
            managePeople() {
                console.log(`Managing people...`);
            },
            delegateTasks() {
                console.log(`Delegating tasks...`);
            }
        }
    }
}

interface Person{
    name: string;
}

interface DogOwner extends Person{
    dogName: string;
}

interface Manager extends Person, DogOwner{
    managePeople(): void;
    delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee);

function isManager(obj: Person | DogOwner | Manager): obj is Manager{
    return 'managePeople' in obj;
};

if (isManager(employee)){
    employee.delegateTasks();
}

// Interface vs Type Alias
// Interface and Type Alias are both used to define custom types in TypeScript, 
// but they have some differences.
// Interface is used to define the shape of an object, 
// while Type Alias can be used to define a type for any kind of value, including primitives, unions, and intersections.