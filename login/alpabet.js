let inputs = document.querySelector('input');
let regetx = /^[a-zA-Z]*$/
let alpabet = function() { 
  return inputs[1].textContent.test(regetx)};

module.exports = alpabet;