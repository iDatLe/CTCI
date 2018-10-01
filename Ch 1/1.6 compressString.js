/*

CTCI - 1.6

String Compression
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string 
would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).

Example: aabcccccaaa - a2b1c5a3

I: String
O: String
C: New string smaller than original string
E: No string

*/


let stringCompression = (s) => {
    //traverse string, keep count of repeated chars
    //if cur and next char is the same, inc count
    //otherwise, concat cur char and count to output string, reset count to 1
    //return compressed string, only if the length is less than the original string, otherwise, return original string
    let out = '';
    let count = 1;
  
    for (let i = 0; i < s.length; i++) {
      let cur = s[i];
      let next = s[i + 1];
      if (cur === next) {
        count++;
        // console.log(out)
      } else {
        out += cur + String(count);
        count = 1;
        console.log(out)
      }
    }
    return out.length < s.length ? out : s;
  };
  
  console.log(
    stringCompression('aabcccccaaa') === 'a2b1c5a3',
    stringCompression('aa') === 'aa',
    stringCompression('aaAAaa') === 'aaAAaa',
    stringCompression('aaaAAaa') === 'a3A2a2',
    stringCompression('') === ''
  );