const prompt = require('prompt-sync')({sigint: true});

let q1 = prompt('Would you like to combine or deconstruct colors?: ')

let combine = 'combine'
let deconstruct = 'deconstruct'
let yellow = 'yellow'
let red = 'red'
let blue = 'blue'
let green = 'green'
let purple = 'purple'
let orange = 'orange'

if (q1 === combine) {
    let q2 = prompt('Enter your first color: ')
    let q3 = prompt('Enter your second color: ')
    if (q2 === blue && q3 === yellow || q2 === yellow && q3 === blue) {
        console.log('You now have Green')
    }   else if (q2 === blue && q3 === red || q2 === red && q3 === blue) {
        console.log('You now have Purple')
    }   else if (q2 === yellow && q3 === red || q2 === red && q3 === yellow) {
        console.log('You now have Orange')
    }   else {
        console.log('error')
    }
}   else if (q1 === deconstruct) {
    let q4 = prompt('Which color would you like to deconstruct?: ')
    if (q4 === purple) {
        console.log('You now have Red + Blue')
    }   else if (q4 === orange) {
        console.log('You now have Red + Yellow')
    }   else if (q4 === green) {
        console.log('You now have Blue + Yellow')
    }   else {
        console.log('error')
    }
}   else {
    console.log('error')
}   

