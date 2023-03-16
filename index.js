const names = [" Guadalupe ", " Ollie ", " Aki "];

function writeCards(names, event) {
    let messages = []
    for(let i = 0;  i < names.length; i++) {
        messages.push("Thank you, " + names [i] + "," + " for the wonderful " +  event  + " gift!")
    }
    return messages
} 

const number = ["10"]
function countDown(number) {
    let i = [10]
    while (i >= 0) {
        console.log(i)
        i--
    }
}

console.log(countDown)