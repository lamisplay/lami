function tete() {
    let input1 = document.getElementById('input1')
    let input = input1.value
    let randomNum = (Math.ceil(Math.random()*10))
    let output = document.getElementById('display')
    let answer = document.getElementById('math')
    if (input == randomNum) {
        output.innerHTML = "Correct"
        answer.innerHTML = randomNum
    } else {;
        output.innerHTML = "What is cashout?"
    }
    console.log(randomNum);
    console.log(typeof(input));

}