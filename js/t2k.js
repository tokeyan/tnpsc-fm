
const copoun = document.querySelector("#code");



copoun.innerText = `${arr()}`;



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


const get = document.getElementById("get");

var codes =["Get 10% Discount","Get 25% Offer","Get 100rs Cashback","Get free Delivery(Books)","Get 200rs Cashback"];

for(var j=0;j<codes.length;j++){
  var i = Math.floor(Math.random()*codes.length);

  get.innerHTML = codes[i];
}