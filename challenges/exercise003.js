function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  const myArray = [];
  for (const num of nums){
    myArray.push(num * num);
  }
  return myArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  const myArray = [];
  for (let [key, word] of words.entries()){
    if(key > 0){
      word = word.replace(/^\w/, (c) => c.toUpperCase());
    }
    myArray.push(word);
  }
  return myArray.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let number = 0;
  for (const person of people){
    number = number + person.subjects.length;
  }
  return number;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  let found = false;
  for (const m of menu){
    if(m.ingredients.includes(ingredient) === true)
    {
      found = true;
    }
  }
  return found;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  const myArray = [];
  for (const number of arr1){
    if(arr2.includes(number) === true && !myArray.includes(number))
    {
      myArray.push(number);
    }
  }
  return myArray.sort();

}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
