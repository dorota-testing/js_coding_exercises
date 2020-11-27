const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let myNumber = null;
  // here goes code form developer.mozilla.org
  const whatever = (element) => element == n; // I have no clue what this is
  let index = nums.findIndex(whatever); // I have no clue how that works
  if((index+1) < nums.length && index >= 0) {
    myNumber = nums[index+1];
  }
    //console.log(index);
  return myNumber;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  //console.log(index);
  let n1 = 0;
  let n2 = 0;
  const arr = str.split('');
  //console.log(arr);
  for (const a of arr){
    if(a==="1") {
      ++n1;
    } 
    if(a==="0") {
      ++n2;
    } 
  }

  let myObject = [
    {
      "1": n1,
      "0": n2
    }
  ];

  return myObject[0];
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let reversed = (Array.from(n.toString())).reverse().join('');
  return Number(reversed);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let myNumber = 0;
  for (const arr of arrs){
    //console.log(arr.reduce((a, b) => a + b, 0));
    myNumber = myNumber + arr.reduce((a, b) => a + b, 0);
  }
  return myNumber;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let len = arr.length;
  let last = arr[len-1];
  let first = arr[0];
  if (len > 1){
    arr[0] = last;
    arr[len-1] = first;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let myBool = false;
  for (let key in haystack) {
    let hay = haystack[key].toString().toLowerCase();
    if (hay.includes(searchTerm.toLowerCase())) {
      myBool = true;
    }
    //console.log( haystack[key]);
  }
  return myBool;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let myObject = {};
  const reg = /[.,:!?]/gu;
  //str = str.match(reg);
  str = str.toLowerCase();
  let words = str.split(' ');
  for (const word of words) {

    let myWord = word;
    let arrPunct = word.match(reg);
    if(arrPunct != null){
        //console.log(arrPunct.length);
        let cutOff = word.length - arrPunct.length;
        myWord = word.substring(0, cutOff);
        //console.log(myWord);
    }
    if(!myObject[myWord]){
      myObject[myWord] = 1;
    } else {
      myObject[myWord] = myObject[myWord]+1;
    }
  }
  return myObject;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
