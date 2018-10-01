/*

CTCI - 1.2

Check  Permutation: 
Given two strings, write a method to decide if one is a permutation of the other.

I: string
O: boolean
C: optimize
E: empty string

time complexity: my way O (n log n)
    other way is O (n)
space complexity: O (n log n)
    other way is O (n)
*/

// let checkPerm = (s1, s2) => {
//     // if two strings have diff lengths, return false
//     // one way: sort both strings then compare -- O (n log n)
//     // optimize: map one string, then check second string
//     if (s1.length !== s2.length) {
//         return false;
//     } else {
//         var string1 = s1.split('').sort().join('');
//         var string2 = s2.split('').sort().join('');
//         return string1 == string2;
//     }
// }

let checkPerm = (s1, s2) => {
    //if two strings have diff lengths, automatically return false
    //one way: sort both strings and compare -- O(n log n)
    //to optimize, we can make a map of one string, and check the second string
  
    let hash = {};
  
    if (s1.length !== s2.length) {
      return false;
    }
  
    for (let i = 0; i < s1.length; i++) {
      let c = s1[i];
      if (hash[c]) {
        hash[c]++;
        console.log(hash, "Hi")
      } else {
        hash[c] = 1;
        console.log(hash, "Bye")
      }
    }
  
    for (let i = 0; i < s2.length; i++) {
      let c = s2[i];
      if (hash[c] && hash[c] !== 0) {
        hash[c]--;
        console.log(hash, "Hello")
      } else {
        console.log(hash, "Goodbye")
        return false;
      }
    }
    console.log(hash)
    return true;
  };

// Test cases

console.log(checkPerm('string', 'hot'))
console.log(checkPerm('hot', 'toh'))
console.log(checkPerm('dat', 'adt'))
console.log(checkPerm('marcus', 'kchau'))