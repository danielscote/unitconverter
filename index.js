/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const button = document.getElementById('convertbutton')
const input = document.getElementById('inputbox')
const firstConversion = document.getElementById('firstconversion')
const secondConversion = document.getElementById('secondconversion')
const thirdConversion = document.getElementById('thirdconversion')
function convert(){
   let feet = input.value * 3.281
   let meters = input.value / 3.281
   firstConversion.textContent = `${input.value} meters = ${feet.toFixed(3)} feet | ${input.value} feet = ${meters.toFixed(3)} meters`
   let gallons = input.value * 0.264
   let liters = input.value / 0.264
   secondConversion.textContent = `${input.value} liters = ${gallons.toFixed(3)} gallons | ${input.value} gallons = ${liters.toFixed(3)} liters`
   let pound = input.value * 2.204
   let kilogram = input.value / 2.204
   thirdConversion.textContent = `${input.value} kilos = ${pound.toFixed(3)} pounds | ${input.value} pounds = ${kilogram.toFixed(3)} kilos`
}
