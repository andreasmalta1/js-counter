let btnIncrement = document.getElementById('increment')
let btnDecrement = document.getElementById('decrement')
let btnReset = document.getElementById('reset')
let counterNum = document.getElementById('counter')

btnIncrement.addEventListener('click', () => {
    updateFunction(1)
});
btnDecrement.addEventListener('click', () => {
    updateFunction(-1)
});
btnReset.addEventListener('click', () => {
    updateFunction(0)
});

function updateFunction(action){
    if (action == 0){
        counterNum.innerHTML = 0
        return returnColor()
    }
    if (action == 1){
        counterNum.innerHTML = parseInt(counterNum.innerHTML) + 1
        return returnColor()
    }
    if (action == -1){
        counterNum.innerHTML = parseInt(counterNum.innerHTML) - 1
        return returnColor()
    }
}

function returnColor(){
    if (parseInt(counterNum.innerHTML) > 0){
        counterNum.style.color = 'green'
        return
    }
    if (parseInt(counterNum.innerHTML) == 0){
        counterNum.style.color = 'black'
        return
    }
    if (parseInt(counterNum.innerHTML) < 0){
        counterNum.style.color = 'red'
        return
    }
}