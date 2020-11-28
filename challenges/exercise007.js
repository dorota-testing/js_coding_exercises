/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  let myArray = n.toString().split('');
  for (let [key, character] of myArray.entries()){
    myArray[key] = +(character); //plus changes string into integer
  }
  let myNumber = myArray.reduce((a, b) => a + b, 0);
  return myNumber;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step === undefined) step = 1;
  let myArray = [start];
  let n = 0;
  for (let i = start+1; i < end; i++){    
    ++n;
    if( n === step) {
      n=0; 
      myArray.push(i);
    }
  }
  myArray.push(end);
  return myArray;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let myArray = [];

  for (let key in users) {
    const screenTime = users[key].screenTime;
    for (let key2 in screenTime) {
      if(screenTime[key2].date === date){
        let usage = screenTime[key2].usage;
        let arrUsage = Object.values(usage);
        let myNumber = arrUsage.reduce((a, b) => a + b, 0);
        //calculate usage
        //console.log(arrUsage);
        //console.log("my number =", myNumber);
        if(myNumber > 100 ){
          myArray.push(users[key].username);
        }
      }
      //console.log("lorem", users[key].screenTime);
    }
  }
  return myArray;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let red = hexStr.substring(1, 3);
  let green = hexStr.substring(3, 5);
  let blue = hexStr.substring(5, 7);
  const convert = str =>{   
    let first = str.charAt(0);
    let second = str.charAt(1);
    const objLetters = {A:10,a:10,B:11,b:11,C:12,c:12,D:13,d:13,E:14,e:14,F:15,f:15}
    if(first in objLetters){
      first = objLetters[first];
    }
    if(second in objLetters){
      second = objLetters[second];
    }    
    let num = +(first)*16 + +(second);
    return num;
  };
  let strRGB = "rgb(" + convert(red) +","+ convert(green) +","+ convert(blue) +")";
  //console.log(red, green, blue, lorem);
  return strRGB;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let result = null;
  //console.log(board[1][0]);
  if (board[0][0] === board[1][0] && board[0][0] === board[0][2]){ //horizontal 1
    result = board[0][0]; 
  } else if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) { //horizontal 2
    result = board[0][1]; 
  } else if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) { //horizontal 3
    result = board[0][2];
  } else if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) { //vertical 1
    result = board[0][0];
  } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) { //vertical 2
    result = board[1][0];
  } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) { //vertical 3
    result = board[2][0];
  } else if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) { //diagonal 1
    result = board[0][0];
  } else if (board[2][0] === board[1][1] && board[1][0] === board[0][2]) { ////diagonal 2
    result = board[2][0];
  }
  return result;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
