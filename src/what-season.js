const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month;
  if (typeof date === 'undefined') return "Unable to determine the time of year!";
  try{
    date.getTime();
    month = date.getMonth();
  } catch(e){
    throw new Error("Unable to determine the time of year!");
  }
    month +=1;
    if ((month%12)< 3) return "winter";
    if ((month< 6)) return "spring";
    if ((month< 9)) return "summer";
    if ((month< 12)) return "autumn";
  };
