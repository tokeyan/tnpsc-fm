
const copoun = document.getElementById("code");

copoun.innerText = `coupon code: ${arr()}`;



function arr(){
  text = "";
  var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "123456789";
  
  var mix = letter + num;

  for(var i=0;i<6;i++){
     text += mix.charAt(Math.floor(Math.random()*mix.length));
     
  }
  return text
}

