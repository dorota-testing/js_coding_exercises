function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  word = word.replace(/^\w/, (c) => c.toUpperCase());
  return word;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!

  let initials = firstName.charAt(0)+'.'+lastName.charAt(0);
  return initials;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let vat = +(((vatRate / 100) * originalPrice).toFixed(2));
  console.log(vat);
  let vatPrice = originalPrice + vat;
  return vatPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let retuctionAmount = +(((reduction / 100) * originalPrice).toFixed(2));
  //console.log(retuctionAmount);
  let salePrice = (originalPrice - retuctionAmount);
  return salePrice;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let index = 0;
  let srtCharsNo = str.length;
  if (srtCharsNo % 2 === 0) {
    index = (srtCharsNo/2);
    return str.charAt(index-1)+str.charAt(index);
  } else {
    index = (Math.round(srtCharsNo/2))-1;
    return str.charAt(index);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let reversed = (Array.from(word)).reverse().join('');
  return reversed;
}
//arg is an array
function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let reversed = [];
  for (const word of words){
    reversed.push((Array.from(word)).reverse().join(''));
  }
  //console.log(reversed); 
  return reversed;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let count = 0;
  for (const user of users){
    if(user.type === 'Linux'){
      count = ++count;
    }
  }
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let myNumber = 0;
  for (const score of scores){
    myNumber = myNumber+score;
  }
  let mean = +((myNumber/scores.length).toFixed(2));
  return mean;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!

  if(n % 3 === 0 || n % 5 === 0 ){
    if(n % 3 === 0 && n % 5 === 0 ){
      return 'fizzbuzz';
    }
    if(n % 3 === 0 ){
      return 'fizz';
    } 
    if(n % 5 === 0 ){
      return 'buzz';
    }
  }
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
