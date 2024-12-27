//// Number 1 // Create an array of numbers 
// let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 100];  

// // Initialize a variable to store the sum 
// let sum = 0; 

// // Use a for-loop to iterate through the array and calculate the sum 
// for (let i = 0; i < numbers.length; i++) { 
//     sum += numbers[i]
//  } 

// // Log the sum to the console 
// console.log("The sum of numbers is: " + sum)








// Number 2, create a length converter function


// function converterOfLength(number, convertUnits, toUnit) {
//     let convertUnit = {
//         meter: {
//             centimeter: 100,
//             kilometer: 0.001,
//             meter: 1
//         },
//         centimeter: {
//             meter: 0.01,
//             kilometer: 0.00001,
//             centimeter: 1
//         },
//         kilometer: {
//             kilometer: 1,
//             meter: 1000,
//             centimeter: 100000
//         }
//     };

   
//     return number * convertUnit[convertUnits][toUnit];
// }
// console.log(converterOfLength(10, 'meter', 'centimeter')  + 'cm' )
// console.log(converterOfLength(50, 'kilometer', 'meter') + 'm')
// console.log(converterOfLength(8000, 'meter', 'kilometer')  + 'km' )
// console.log(converterOfLength(8, 'kilometer', 'centimeter') + 'cm')
// console.log(converterOfLength(70, 'meter', 'meter')  + 'm' )
// console.log(converterOfLength(500, 'kilometer', 'kilometer') + 'km')
// console.log(converterOfLength(80, 'centimeter', 'kilometer') + 'km')
// console.log(converterOfLength(900, 'centimeter', 'meter')  + 'm' )
// console.log(converterOfLength(1000, 'centimeter', 'centimeter') + 'cm')

// function lengthConverter(value, fromUnit, toUnit) {
//     // Conversion rates
//     const conversionRates = {
//         meters: {
//             meters: 1,
//             kilometers: 0.001,
//             feet: 3.28084,
//             miles: 0.000621371
//         },
//         kilometers: { 
//             meters: 1000,
//             kilometers: 1,
//             feet: 3280.84,
//             miles: 0.621371
//         },
//         feet: {
//             meters: 0.3048,
//             kilometers: 0.0003048,
//             feet: 1,
//             miles: 0.000189394
//         },
//         miles: {
//             meters: 1609.34,
//             kilometers: 1.60934,
//             feet: 5280,
//             miles: 1
//         }
//     };

//     // Check if fromUnit and toUnit are valid
//     if (conversionRates[fromUnit] && conversionRates[fromUnit][toUnit]) {
//         // Perform the conversion
//         return value * conversionRates[fromUnit][toUnit];
//     } else {
//         return 'Invalid units';
//     }
// }

// // Example usage:
// console.log(lengthConverter(10, 'miles', 'feet')); // Output: 32.8084
// console.log(lengthConverter(5, 'miles', 'kilometers')); // Output: 8.0467
// console.log(lengthConverter(20, 'feet', 'kilometers'))

// function lengthConverter (value){
//     return value  100
// }
// let centimeter = lengthConverter(20); 
// // [meterTocentimeter]
// console.log(centimeter + 'cm')

// let meter = lengthConverter(20)
// // [centimeterTometer]
// console.log(meter + 'm')







// Number 3, print all even numbers from 0-100

//     let Theevenones = 1

// while (Theevenones <=100){
//     if (Theevenones % 2 === 0){
//         console.log(Theevenones)
//     } Theevenones++
// }





// Number 4, print a table containing multiplication tables

// function printMultiplicationTable() {               
//     let table = '';

//     // Create the header row
//     table += '   ';
//     for (let i = 1; i <= 10; i++) {
//         table = table + i.toString().padStart(4, ' ');
//     }
//     table += '\n';

//     // Create the multiplication table row
//     for (let i = 1; i <= 10; i++) {
//         table += i.toString().padStart(2, ' ') + ' ';
//         for (let j = 1; j <= 10; j++) {
//             table += (i * j).toString().padStart(4, ' ');
//         }
//         table += '\n';
//     }

//     console.log(table);
// }

// // Call the function to print the multiplication table
// printMultiplicationTable();



// Number 5, Create a function that reverse an array
function reverseAnArray(abdul) {
    let reversedAbdul = [];
    for (let num = abdul.length - 1; num >= 0; num--) {
        reversedAbdul.push(abdul[num]);
    }
    return reversedAbdul;
}

// Example usage
let mainArray = [1, 2, 3, 4, 5];
let reversedAbdul = reverseAnArray(mainArray);
console.log(reversedAbdul); // Output: [5, 4, 3, 2, 1]

// Number 6, Sort an array of strings in alphabetical order
// Create an array of strings
let stringsArray = ["banana", "apple", "cherry", "date", "elderberry"];

// Sort the array in alphabetical order
stringsArray.sort();

// Log the sorted array to the console
console.log(stringsArray); // Output: ["apple", "banana", "cherry", "date", "elderberry"]


// Number 7, Sort an array of numbers in descending order
// Create an array of numbers
let numbersArray = [10, 5, 8, 1, 7, 3, 9];

// Sort the array in descending order
numbersArray.sort(function(a, b) {
    return b - a;
});

// Log the sorted array to the console
console.log(numbersArray); // Output: [10, 9, 8, 7, 5, 3, 1]


// Number 8, return a boolean if a number is divisible by 10.
function isDivisibleBy10(number) {
    return number % 10 === 0;
}

// Example usage
console.log(isDivisibleBy10(20)); // Output: true
console.log(isDivisibleBy10(25)); // Output: false


// Number 9, Return the number of vowels in a string
function countVowels(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// Example usage
let exampleString = "Hello, World!";
console.log(countVowels(exampleString)); // Output: 3



// Nunmber 10, create a function that filters out negative numbers
// function filterNegativeNumbers(arr) {
//     return arr.filter(function(number) {
//         return number >= 0;
//     });
// }

// // Example usage
// let numbersArray = [10, -5, 8, -1, 7, -3, 9];
// let positiveNumbersArray = filterNegativeNumbers(numbersArray);
// console.log(positiveNumbersArray); // Output: [10, 8, 7, 9]
