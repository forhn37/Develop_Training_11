let pw = "1234"
let pwcopy = "1234"

let checkpassword = function(pw, pwcopy) {
if(pw === pwcopy) {
  console.log("true")
} else {
  console.log("false")
}
}

module.exports = checkpassword;