//  1
console.log("Hello, World!");

// 2 

let num1 = 2 ;
let num2 = 5 ;
console.log(num1 + num2);

// 3  

let num = 3;

if (num % 2 === 0) {
    console.log(`${num} is even`);
} else {
    console.log(`${num} is odd.`)
}

// 4 

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//  5 

const fruits = ["Apple", "Mango","Grapes", "Kiwi"];
for (let fruit of fruits) {
    console.log(fruit);
} 

// 6 

function addNumbers(num1,num2) {
    return num1 + num2
}

console.log(addNumbers(10,12))

// 7 

function revString(string) {
    let rev_string = "" 
    for (let char of string) {
        rev_string = char + rev_string
    }
    return rev_string
}

console.log(revString("Hello"));

// 8 

const person = {
    name: "Indra",
    age: 24,
    city: "Hyderabad"
}

console.log(person)

// 9 

function findMax(nums) {
    if (nums.length === 0) {
        return "Array is Empty";
    }
     else {
        let max = nums[0];
        for (let i = 0; i <= nums.length;i++) {
            if (nums[i] > max) {
                max = nums[i]
            }
        }
        return max
     }
}

console.log(findMax([2,33,52,64]))

// 10 

let age = 22;

if (age > 18) {
    console.log("You are Eligible to Vote.");
} else {
    console.log("Not Eligible");
}

// 11

function sumOfAllNumbers(nums) {
    sum = 0 

    for (let ele of nums) {
        sum += ele
    }
    return sum
}

console.log(sumOfAllNumbers([2,44,25,6,7]))

// 12 

function areaOfRectangle(length,breadth) {
    let area = length * breadth

    return area
}

console.log(areaOfRectangle(10,5));

// 13 

function vowelsInAString(string) {
    let count = 0;
    const vowels = ["A","E","I","O","U","a","e","i","o","u"];
    for (let char of string) {
        if (vowels.includes(char)) {
            count += 1;
        }
    }
    return count
}

console.log(vowelsInAString("Hello, Umbrella"));

// 14 

const car = {
    make: "Honda",
    model: "Civic",
    start : function() {
        console.log("Started");
    }
}

console.log(car.make);
console.log(car.model);
car.start()


// 15 

let numbers = [8, 2, 6, 1, 5];

numbers.sort()

console.log(numbers)

// 16 

let factNum = 5;

let factorial = 1
for (let i = 1; i <= factNum; i++) {
    factorial = factorial * i
}
console.log(factorial)

// 17 

function fibonacciSeries(n) {
    let fibSeries = [0,1];

    for (let i = 2; i < n; i++) {
        let nextNum = fibSeries[i-1] + fibSeries[i-2]
        fibSeries.push(nextNum)
    }

    return fibSeries;
}

console.log(fibonacciSeries(7))

// 18 

const date = new Date()
console.log(`${date.toLocaleTimeString()}`)

// 19 

let numerator = 10;
let denominator = 0;

function division(n,d) {
    try{
        if (d === 0) {
            throw new Error("Division by Zero not allowed.");
        }
        console.log(n/d)

    } catch(error) {
        console.log("Error :" + error.message);
    }
}

division(numerator,denominator)

// 20 

function Palindrome(str) {
    let rev_string = ""
    for(let char of str) {
        rev_string = char + rev_string 
    }
    
    if (str === rev_string) {
        return "a Palindrome";
    } else {
        return "Not a palindrome";
    }
}
let string = "racecar"
let isPalindrome = Palindrome(string);
console.log(`${string} is ${isPalindrome}`)

// 21 

let min = 2
let max = 12;
let randomNumber = (Math.random() * (max-min + 1) + min);
console.log(Math.floor(randomNumber))

// 22 

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area.toFixed(2)
}

let radius = 5;
let area = areaOfCircle(radius);

console.log(area) 

// 23 

let str = "this is a simple string";

let words = str.split(" ")

for (let i = 0; i <words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}

let capitalizedStr = words.join(" ");
console.log(capitalizedStr)

// 24 

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`)
    }
}

multiplicationTable(5)

// 25 
let n = 153

function armstrongNumber(n) {
    let str = String(n)

    let strLength = str.length 

    let sum = 0;
    for (let digit of str) {
        sum += Math.pow(parseInt(digit), (strLength)) 
    }

    if (sum === n) {
        return `${n} is a Armstrong Number`;
    } else {
        return `${n} is not a Armstrong Number`
    }
}

console.log(armstrongNumber(n))


