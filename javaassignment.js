let input = document.getElementById('input')
let h2 = document.getElementById('output')

function sensorword() {
    let inp = input.value
    let replacee = inp.replace('fuck','f--k').replace('dick','d--k')
    
    h2.innerHTML = replacee
}

