// let input3 = input[3].textContent;
// let input3index = input3.indexOf("@");


const indexcheck = function (input3) {
  if (input3.indexOf("@") > 0 && input3.indexOf(".") > 0) {
    if (input3.indexOf("@") < input3.indexOf(".")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = indexcheck;