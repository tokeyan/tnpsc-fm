const finalscore = document.getElementById('finaltext');
const mostrecentscore = localStorage.getItem('mostrecentscore');
const quote = document.getElementById('quote');

finalscore.innerText = mostrecentscore;

if(mostrecentscore <= 30){
    quote.innerText = `Don't Loose Your Hope`;
}
else if(mostrecentscore <= 60){
    quote.innerText = `Good Performance`;
}
else if(mostrecentscore <= 90){
    quote.innerText = `Awesome! Play..`;
}
else if(mostrecentscore == 100){
    quote.innerText = `Wow! you got fully`;
}



