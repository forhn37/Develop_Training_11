let inputs = document.querySelector('input');

let reget = /^[a-zA-Z]*$/

let alpabet = function (name) {
if(!reget.test(name)) {
  return false
} else {
  return true
}
}
module.exports = alpabet;