// let input3 = input[3].textContent;
// let input3index = input3.indexOf("@");


const indexcheck = function (input3) {
  if (input3.indexOf("@") > 0 && input3.indexOf(".") > 0) {
    if (input3.indexOf("@") < input3.indexOf(".")) {
      console.log("true");
    } else {
      console.log("false")
    }
  } else {
    console.log("false")
  }
}
module.exports = indexcheck;