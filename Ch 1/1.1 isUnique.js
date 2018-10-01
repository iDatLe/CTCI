/*

CTCI - 1.1 
 
Is Unique:
Implement an algorithm to determine if a string has all unique characters.  
What if you cannot use additional data structures?

I (input)      : string
O (output)     : boolean
C (constraints): no additional data structures to optimize
E (edge cases) : empty string

time complexity: linear - O(n)
space complexity: linear - O(n)

*/

let isUnique = (s) => {
    // Hash table seems ideal because it's O(1)
    // Check each character and store in a hash table
    // If character is already there then return false
    // When done checking, return true
    let hash = {};

    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if (hash[c]) {
            return false;
        } else {
            hash[c] = true;
        }
    }
    return true;
};
  
// Test cases

console.log(isUnique('s') === true);
console.log(isUnique('') === true);
console.log(isUnique('ss') === false);
console.log(isUnique('stories') === false);
console.log(isUnique('rainbow') === true);
console.log(isUnique('chirpingmermaid') === false);