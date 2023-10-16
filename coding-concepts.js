// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer:9
// b) Verify and explain:I forgot to include the space and miscounted the correct output was 10.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: Strings start at a 0 index so I counted from the 1st index of the string and 0 being H and continued counting till i reached the 4th index which was o in Hello.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain:Arrays start at a 0 index so I counted from the 1st index of the array and 0 being Javascript I counted till i reached the 1st index which was Ruby.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:"SATURDAY" , "SUNDAY"
// b) Verify and explain:I thought the 2 days of the week would be uppercased due to the .toUpperCase, but weekends is an array and .toUpperCase isnt a method that will work with arrays and will output an error message 

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: I thought the output would be 3 . I rushed reading the code and forgot the type of operator and started coungting from the 0 index in the array. Once i loged it i saw the type of operator and understood why it showed number instead of 3.