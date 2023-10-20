const reget = /^[a-zA-Z]*$/

const alpabet = function (name) {
if(!reget.test(name)) {
  return false;
} else {
  return true;
}
}

module.exports = alpabet;