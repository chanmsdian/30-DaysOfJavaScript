//Level 2- 1.
let quote1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
//2. 
let quote2 = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"';
console.log(quote2);
//3.
console.log(typeof('10')==10);
//4.
console.log(Math.ceil(parseFloat('9.8'))==10);
//5.
console.log(('Jargon'.includes('on'))=='Python'.includes('on'));
//6.
console.log(quote1.includes('Jargon'));
//7.
console.log(Math.floor(Math.random()*101));
//8.
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
//9.
console.log(Math.ceil(Math.random() * (0 + 255 + 1)) + 0);
//10.
let a = 'JavaScript';
let length= a.length;
let pos = Math.floor(Math.random() * (length - 0 + 1)) + 0;
console.log(a.charAt(pos));
//11.
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
//12.
let sentence3 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence3.replaceAll('because',''));
let pos1 = sentence3.indexOf('because');
let pos2 = sentence3.lastIndexOf('because');
console.log(sentence3.substring(pos1,pos2+7));
