let inputs = document.querySelector('input');
let test1 = "김현";
let test2 = "dsfjlsdfsdf"
let reget = /^[a-zA-Z]*$/

let alpabet = function (name) {
if(!reget.test(name)) {
  return false
} else {
  return true
}
}
module.exports = alpabet;