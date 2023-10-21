const textlist = require('./titletext')

const allvaluenotempty = Object.values(textlist).every(val => val !== "" );

allvaluenotempty