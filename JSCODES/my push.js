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

function printMultiplicationTable() {
    let table = '';

    // Create the header row
    table += '   ';
    for (let i = 1; i <= 10; i++) {
        table += i.toString().padStart(4, ' ');
    }
    table += '\n';

    // Create the multiplication table rows
    for (let i = 1; i <= 10; i++) {
        table += i.toString().padStart(2, ' ') + ' ';
        for (let j = 1; j <= 10; j++) {
            table += (i * j).toString().padStart(4, ' ');
        }
        table += '\n';
    }

    console.log(table);
}

// Call the function to print the multiplication table
printMultiplicationTable();
