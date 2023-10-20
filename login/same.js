let pw = "1234"
let pwcopy = "1234"

let checkpassword = function(pw, pwcopy) {
if(pw === pwcopy) {
  return true;
} else {
  return false;
}
}

module.exports = checkpassword;