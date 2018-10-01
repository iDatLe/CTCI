/*

CTCI - 1.9

Assumeyou have a method isSubstringwhich which checks if one word is a substring of 
another. Given two strings, s1 and s2, write code to check if s2 is a rotation of 
s1 using only one call to isSubstring 
(e.g.,"waterbottle" is a rotation of"erbottlewat").

I: String
O: Boolean
C: Optimize
E: Nada

*/

// Option 1

let isSubstring = (s1, s2) => {

    if (s1.length !== s2.length) {
        return false;
    }

    let newS1 = s1 + s1; // erwat + erwat = erwaterwat

    return newS1.indexOf(s2) !== -1
    
}

console.log(
    isSubstring('water', 'erwat'),
    isSubstring( 'true', 'etru'),
    isSubstring('nada', 'nadaa')
)

//|| prev2 !== arr1[arr1.length - 1]