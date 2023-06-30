/* exported isVowel */

function isVowel(char) {
   char = char.toUpperCase();
  
   if (char === 'A'|| char === 'E'|| char ==='I'|| char === 'O'||char ==='U') {
        return true;
    } else {
        return false;
    }
}


// function isVowel(char) {
   
//     if (char === 'A'|| char === 'E'|| char ==='I'|| char === 'O'||char ==='U'||char === 'a'|| char === 'e'|| char ==='i'|| char === 'o'||char ==='u'  ) {
//          return true;
//      } else {
//          return false;
//      }
//  }


// letter === vowel?
// letter === a or e or i or u or o ? uppercase /lowercase
