//Level 1- 1.
let challenge = '30 Days Of JavaScript';
//2.
console.log(challenge);
//3.
console.log(challenge.length);
//4.
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLowerCase());
//6.
console.log(challenge.substring(0,2));
//7.
console.log(challenge.slice(3))
//8.
console.log(challenge.includes('Script'));
//9.
console.log(challenge.split(''));
//10.
console.log(challenge.split(' '));
//11.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
//12.
console.log(challenge.replace('JavaScript','Python'));
//13.
console.log(challenge.charAt(15));
//14.
console.log(challenge.charCodeAt(challenge.indexOf('J')));
//15.
console.log(challenge.indexOf('a'));
//16.
console.log(challenge.lastIndexOf('a'));
//17.
let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence1.indexOf('because'));
//18.
console.log(sentence1.lastIndexOf('because'));
//19.
console.log(sentence1.search('because'));
//20.
let sentence2 = ' 30 Days Of JavaScript ';
console.log(sentence2.trim());
//21.
console.log(challenge.startsWith('3'));
//22.
console.log(challenge.endsWith('JavaScript'));
//23.
console.log(challenge.match(/a/gi));
//24.
console.log('30 Days of'.concat('JavaScript'));
//25.
console.log(challenge.repeat(2));
