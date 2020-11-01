const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const Answer = {
    turns:"",
    seconds:""
  }
  Answer.turns = Math.pow(2,disksNumber)-1;
  Answer.seconds = Math.floor((3600/turnsSpeed) * Answer.turns);
  return Answer;
  // remove line with error and write your code here
}