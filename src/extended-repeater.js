const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes=1,separator='+',addition='', additionRepeatTimes=1,additionSeparator='|'}) {
  let answer = '';
  for (let i=0; i < repeatTimes; i++) {
    if (i > 0) answer += separator;
    answer += str;
    for (let j=0; j<additionRepeatTimes; j++) {
      if (j>0) answer += additionSeparator;
      answer += addition;
    }
  }
  return answer;
};
  