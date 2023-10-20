const reget = /^[a-zA-Z]*$/

const alpabet = function (name) {
if(!reget.test(name)) {
  console.log(false);
} else {
  console.log(true);
}
}

module.exports = alpabet;