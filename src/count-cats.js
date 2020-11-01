const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let flag=0;
  matrix.forEach((element)=> {
    element.forEach((key)=>{
      if (key ==="^^") flag++;
    })
  });
  return flag;
};
