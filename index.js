const number = document.getElementById("number-el")
const buttonEL = document.getElementById("button-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

// function convert() {
//     let num = parseFloat(number.value)

//     lengthEl.textContent = `${num} meters = ${(num*meterToFeet).toFixed(3)} feet | ${num} feet = ${(num/meterToFeet).toFixed(3)}`
//     volumeEl.textContent = `${num} liters = ${(num*literToGallon).toFixed(3)} gallons | ${num} gallons = ${(num/literToGallon).toFixed(3)} liters`
//     massEl.textContent = `${num} kilos = ${(num*kilogramToPound).toFixed(3)} pounds | ${num} pounds = ${(num/kilogramToPound).toFixed(3)} kilos`

// }

function calcLength(num) {
    lengthEl.textContent = `${num} meters = ${(num*meterToFeet).toFixed(3)} feet | ${num} feet = ${(num/meterToFeet).toFixed(3)}`
}

function calcVolume(num){
    volumeEl.textContent = `${num} liters = ${(num*literToGallon).toFixed(3)} gallons | ${num} gallons = ${(num/literToGallon).toFixed(3)} liters`
}

function calcMass(num){
    massEl.textContent = `${num} kilos = ${(num*kilogramToPound).toFixed(3)} pounds | ${num} pounds = ${(num/kilogramToPound).toFixed(3)} kilos`
}

buttonEL.addEventListener("click", function() {
    let num = parseFloat(number.value)
    calcLength(num)
    calcVolume(num)
    calcMass(num)
})