var i =0;
var images =[];
var time = 10000;

images[0] = 'diwali.png';
images[1] = 'instagram.png';
images[2] = 'telegram.png';
images[3] = 'kalam.png';

function changeimg(){
    document.slide.src = images[i];
    
    if(i <images.length - 1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeimg()",time);
}
window.onload = changeimg