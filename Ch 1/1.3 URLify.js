/*

CTCI - 1.3

URLify: 
Write a method to replace all spaces in a string with '%20'. 
You may assume that the string has sufficient space at the end to hold 
the additional characters,and that you are given the "true" length of the string. 
(Note: If implementing in Java,please use a character array so that you can 
perform this operation in place.)

I: string
O: string
C: optimize
E: empty string

*/

// let urlify = (string, length) => {
//     let replaced = string.toString().replace(/ /g, '%20')
//     return replaced
// }

let URLify = (s, n = s.length) => {
    // First pass: Count the number of non space characters in the string
    // subtract characters from true length n to see how many spaces we're allowed to replace with %20
    // Second pass: If we still have spaces, append '%20'
    // otherwise copy current character
    // when run out of spaces, append empty string instead

    let out = '';
    let chars = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c !== ' ') {
            chars++;
            console.log(chars, out, "line 38")
        } 
    }

    let spaces = n - chars;

    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c == ' ' && spaces > 0) {
            out += '%20';
            spaces--
            console.log(chars, out, "line 49")
        }  else if (c !== ' ') {
            out += c;
            console.log(chars, out, "line 52")
        }
    }

    while (spaces > 0) {
        out += '%20';
        spaces--;
        console.log(chars, out), "line 59"
    }
    return out;
}

console.log(
    URLify('Mr John Smith ', 13) === 'Mr%20John%20Smith',
    URLify('Mr John Smith ', 14) === 'Mr%20John%20Smith%20',
    URLify('   hi', 7) === '%20%20%20hi%20%20',
    URLify('   hi ', 3) === '%20hi',
    URLify('', 0) === '',
    URLify('', 2) === '%20%20',
    URLify('hel lo', 5) === 'hello'
  );