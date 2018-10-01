/*

CTCI - 1.5

One Away - There are three types of edits that can be performed on strings: 
insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away.

I: String
O: Boolean
C: Optimize
E: Empty

time complexity: linear
space complexity: constant

*/

// if insert, s1's current char should match s2's next char
// if remove, s1's next char should match s2's current char
// if replace, s1's next char should match s2's next char

// max of one edit
// if diff in length is > than max edit, return false

// iterate through string simultaneously, checking for differences
// store max length for for loop condition
// if diff is found, decrement from number of edits and check if edits have dropped below 0
// if so, return false
// when for loop is done, return true

let oneAway = (s1, s2) => {

    let edits = 1; // We're allowed one max edit (one away)
    let maxLen = Math.max(s1.length, s2.length); // Returns larger of two strings
    let diff = Math.abs(s1.length - s2.length); // Returns the difference of two strings

    if (diff > edits) { // If the diff is greater than 1, obviously more than one away
        return false
    }

    for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++) {
        let c1 = s1[i];
        let c2 = s2[j];
        if (c1 !== c2) {
            edits--; // If more than one does not match, edits becomes negative

            if (edits < 0) {
                return false;
            }

            if (c1 === s2[j + 1]) { //inserted
                j++;
            } else if (s1[i + 1] === c2) { //removed
                i++;
            }
            
        }
    }
    return true;
};

console.log(
    oneAway("pale", "ple") === true,
    oneAway("pales", "pale") === true,
    oneAway("pale", "bale") === true,
    oneAway("pale", "bake") === false
)