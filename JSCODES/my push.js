//// Number 1 // Create an array of numbers 
let numbers = [5, 6, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 100, 150] 

let sum = 0 

for (let me = 0; me < numbers.length; me++) { 
    sum += numbers[me]
 } 
 
console.log("The sum of numbers is: " + sum)



// Number 2, create a length converter function
function converterOfLength(number, convertUnits, toUnit) {
    let convertUnit = {
        meter: {
            centimeter: 100,
            kilometer: 0.001,
            meter: 1
        },
        centimeter: {
            meter: 0.01,
            kilometer: 0.00001,
            centimeter: 1
        },
        kilometer: {
            kilometer: 1,
            meter: 1000,
            centimeter: 100000
        }
    };

   
    return number * convertUnit[convertUnits][toUnit];
}
console.log(converterOfLength(10, 'meter', 'centimeter')  + 'cm' )
console.log(converterOfLength(50, 'kilometer', 'meter') + 'm')
console.log(converterOfLength(8000, 'meter', 'kilometer')  + 'km' )
console.log(converterOfLength(8, 'kilometer', 'centimeter') + 'cm')
console.log(converterOfLength(70, 'meter', 'meter')  + 'm' )
console.log(converterOfLength(500, 'kilometer', 'kilometer') + 'km')
console.log(converterOfLength(80, 'centimeter', 'kilometer') + 'km')
console.log(converterOfLength(900, 'centimeter', 'meter')  + 'm' )
console.log(converterOfLength(1000, 'centimeter', 'centimeter') + 'cm')



// Number 3, print all even numbers from 0-100
    let theevenones = 0

while (theevenones <= 100){
    if (theevenones % 2 === 0){
        console.log(Theevenones)
    } theevenones++
}


// Number 4, print a table containing multiplication tables
function multiplicationTable() {               
    let table = ''

    table += '   '
    for (let me = 1; me <= 10; me++) {
        table = table + me.toString().padStart(4, ' ')
    }
    table += '\n'

    for (let me = 1; me <= 10; i++) {
        table += i.toString().padStart(2, ' ') + ' '
        for (let you = 1; you <= 10; you++) {
            table += (me * you).toString().padStart(4, ' ')
        }
        table = table + '\n'
    }

    console.log(table)
}
multiplicationTable();



// Number 5, Create a function that reverse an array
function reverseAnArray (value){
    let reversevalue = []
    for (let num = value.length - 1; num >=0; num--){
        reversevalue.push(value[num])
    }
    return reversevalue
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let reversevalue = reverseAnArray(array)
console.log(reversevalue)


// Number 6, Sort an array of strings in alphabetical order
let arrayOfStrings = ['Damilola', 'Babalola', 'Fumilayo', 'Eneye,', 'Cate', 'Wahab', 'Shegun', 'Abdul', 'Olamide', 'Gbenga']

arrayOfStrings.sort()

console.log(arrayOfStrings)




// Number 7, Sort an array of numbers in descending order
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.sort(function(me, you){
    return (you - me)
})
console.log(array)


// Number 8, return a boolean if a number is divisible by 10.
function divideByTen (value){
    return value = 10 % 2 === 0
}
console.log(divideByTen(20))

let number = 10 % 5 === 0

console.log(number)


// Number 9, Return the number of vowels in a string
function vowelsCount (string) {
    let vowel = "AaEeIiOoUu"
    let count = 0

    for (let test = 0; test < string.length; test++ ){
if (vowel.includes (string[test])){
    count++
}
    }
    return count
} 

let counts = "We Made A Reunion"
console.log(vowelsCount(counts))



// Nunmber 10, create a function that filters out negative numbers
function negativeNumbers (abdul){
    return abdul.filter (function(number){
        number <= 0
    })
}
let numbers = [1, -5, -6, -0, 9, 8, 6, ]
let allnegativeNumbers = negativeNumbers(numbers)
console.log(allnegativeNumbers)
