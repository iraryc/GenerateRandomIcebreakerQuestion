"use strict"

function convertFtoC(currentTempF) {
 let celsius = ((currentTempF - 32 )*(5/9));

return celsius
 
}
let currentTempF = 55;
let celsiusTemp = convertFtoC(currentTempF);

console.log(`The temperature in Celsius is ${celsiusTemp.toFixed(2)}`);


