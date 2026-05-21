/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
function greet(name){
   console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

// Script 2 - Sum calculation
const addNumbers = function(num1, num2){
   return num1 + num2
}
let num1 = 5;
let num2 = 10;
let sum = addNumbers(num1, num2);

console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

// Script 3 - Product calculation
const multiplyNumbers = function(num3, num4){
   return num3 * num4
}
let num3 = 5
let num4 = 10
let product = multiplyNumbers (num3, num4);
console.log("The product of " + num3 + " and " + num4 + " is " + product);

// Script 4 - Print names from a list
function printNamesArray(array){
   for (let i=0; i<array.length; i++){
      console.log(array[i]);
   }
}
printNamesArray(["Alice", "Bob", "Charlie"]);

/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!
