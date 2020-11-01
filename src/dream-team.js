const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let prev="";
  let i=0;
  let flag=false;
  if (!Array.isArray(members)) return false;
  members.forEach((element)=>{
    if (typeof element === "string"){
    flag = true;
    members[i]=element.replace(/ /g, "").toUpperCase();
    }
    i++;
  });
  if (!flag) return false;
  members.sort().forEach((element)=>{
    if (typeof element === "string") prev+=element.substr(0,1).toUpperCase();
  });
  return prev;
};
