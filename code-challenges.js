// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const worldSeriesRuns = [2 ,5 , 2 , 2, 4 ,6 ,3 ,5 ,3]
    console.log(worldSeriesRuns.length)


    // Expected output: 9

// Pseudo code: input: merged 1984 and 1998 series runs in new const worldSeriesRuns. After merging all numbers into the worldSeriesRuns Array I consoled.log worldSeriesRuns and added .length which gave me my expected outcome of 9. 



// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Golf 2023"
// Expected output: "3202 floG"

console.log(currentCohort.split("").reverse().join(""))


// Pseudo code: Made a bunch of mistakes until it finally cliked and used .split to 1st convert the "Golf 2023" string into an array. 2nd- Now that my string was an array I could use a method to achieve my desire outcome. 3rd- I used .reverse to reverse Golf 2023 to '3', '2', '0', '2', ' ', 'f','l', 'o', 'G'. 4th- After I had the array .reversed i used .join to merge them together to get the expexted outcome.
  



// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
const oddNum = [13, 5, -5, 27]
// Expected output: 13 5 -5 27


for ( let i = 0; i <= stockExchange.length; i++) {
    if(stockExchange[i] !== oddNum ){
        console.log(oddNum)
    }
     
}



// Pseudo code:1st I made a new const oddNum which contained the numbers I wanted to ultimately output. 2nd - I made a loop and used an if statement to evaluate boolean value, i used a bang operator to inverse the boolean which gave me the expected output.