
function submit(){
    let input1 = document.getElementById('input1')
let thisPrompt = input1.value
let display = document.getElementById('display')

switch (thisPrompt) {
 case 'january':
     console.log('jan has 31 days');
     display.innerHTML = 'jan has 31 days'
     break;
 case 'february':
     console.log('feb has 28days');
     display.innerHTML = 'feb has 28 days'
     break;
 case 'march':
     console.log('march has 31days');
     display.innerHTML = 'march has 31 days'
     break;
 case 'april':
     console.log('april has 30days');
     display.innerHTML = 'aprl has 31 days'
     break;
 case 'may':
     console.log('may has 31days');
     display.innerHTML = 'may has 31 days'
     break;
 case 'june':
     console.log('june has 30days');
     display.innerHTML = 'june has 30 days'
     break;
 case 'july':
     console.log('july has 31days');
     display.innerHTML = 'july has 31 days'
     break;
 case 'august':
     console.log('august has 31days');
     display.innerHTML = 'august has 31 days'
     break;
 case 'september':
     console.log('sept has 30days');
     display.innerHTML = 'sept has 30 days'
     break;
 case 'october':
     console.log('oct has 31days');
     display.innerHTML = 'oct has 31 days'
     break;
 case 'november':
     console.log('nov has 30days');
     display.innerHTML = 'nov has 30 days'
     break;
 case 'december':
     console.log('dec has 31days');
     display.innerHTML = 'dec has 31 days'
     break;  

 default:
     console.log('you have input a wrong month');
     break;
}

}
 
// let thisPrompt = prompt ('month','input here')
// let all = thisPrompt.toLowerCase()
