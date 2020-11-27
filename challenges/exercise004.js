function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const myArray = [];
  for (const num of nums){
    if(num < 1){
      myArray.push(num);
    }
  }
  return myArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const myArray = [];
  for (const name of names){
    if(name.charAt(0) === char){
      myArray.push(name);
    }
  }
  return myArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  //word.substring(0, cutOff)
  const myArray = [];
  for (const word of words){
    if(word.substring(0, 3) === "to "){
      myArray.push(word);
    }
  }
  return myArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const myArray = [];
  for (const num of nums){
    if(Number.isInteger(num) === true){
      myArray.push(num);
    }
  }
  return myArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const myArray = [];
  for (const user of users){
      myArray.push(user.data.city.displayName);   
  }
  return myArray;
  
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const myArray = [];
  for (const num of nums){
      myArray.push(+(Math.sqrt(num)).toFixed(2));
  }
  return myArray;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const myArray = [];
  for (const sentence of sentences){
    let LC_sentence = sentence.toLowerCase();
    if(LC_sentence.includes(str.toLowerCase())){
      myArray.push(sentence);
    }
  }
  return myArray;  

}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  const myArray = [];
  //external loop
  for (const triangle of triangles){
    //sort needs this function in brackets to sort numbers ascending
    let arr = triangle.sort((a, b) => a - b).reverse();
      
      myArray.push(arr[0]);

  }
  return myArray; 

}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
