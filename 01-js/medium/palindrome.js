/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// const lc = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
// const uc = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

//  function isPalindrome(s) {
//      let i=0,j=s.length-1;

//      while(i<j)
//      {
//         if(!(lc.includes(s[i]) || uc.includes(s[i])))
//         {
//             i++;
//             continue;
//         }

//         if(!(lc.includes(s[j]) || uc.includes(s[j])))
//         {
//             j--;
//             continue;
//         }

//         if(s[i].toLowerCase()!==s[j].toLowerCase())
//             return false;

//         i++;
//         j--;
//      }
//      return true;
// }


function isPalindrome(s) {
    const isAlphabetic = (char) => /[a-zA-Z]/.test(char);

    let i = 0, j = s.length - 1;

    while (i < j) {
      while (i < j && !isAlphabetic(s[i])) {
        i++;
      }

      while (i < j && !isAlphabetic(s[j])) {
        j--;
      }

      const charI = s[i].toLowerCase();
      const charJ = s[j].toLowerCase();

      if (charI !== charJ) {
        return false;
      }

      i++;
      j--;
    }

    return true;
  }

  // Example usage:
  console.log(isPalindrome('Eva, can I see bees in a cave?')); // Output: true


//isPalindrome('Eva, can I see bees in a cave?')
module.exports = isPalindrome;
