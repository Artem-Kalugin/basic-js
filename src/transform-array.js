const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let j = new Array();
  let flag = true;
  for(let i=0;i<arr.length;i++){
    if (typeof arr[i] === "string" && arr[i].startsWith("--")){
      if (flag){
      switch (arr[i]){
        case '--discard-prev':
          j.pop();
          flag=false;
          break;
        case '--discard-next':
          i = i+1;
          flag=false;
          break;
        case '--double-prev':
          if (typeof arr[i-1]!=='undefined') j.push(arr[i-1]);
          flag=false;
          break;
        case '--double-next':
          if (typeof arr[i+1]!=='undefined') j.push(arr[i+1]);
          flag=false;}}   
    }else{
      flag=true;
      j.push(arr[i]);
    }
  }
  return j;
};