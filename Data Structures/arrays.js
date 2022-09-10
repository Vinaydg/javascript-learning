// Declaring an array
const strings = [2, 3, 4, 6];


// Printing initial array
console.log("Initial strings array")
console.log(strings)


// Adding an element at the end of the strings array
strings.push(25)


// Printing after pushing a value
console.log("Strings array afer pushing a value")
console.log(strings)


// Adding an element at the beginning of the array
strings.unshift(10)


// Printing after unshifting an element in 
console.log("Strings after adding an element at the beginning")
console.log(strings)


// insterting an element at an index in the array
strings.splice(2, 0, 5)


// Printing after an element is insterted at an index
console.log("Strings after an element is insterted")
console.log(strings)