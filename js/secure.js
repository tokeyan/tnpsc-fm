$(document).keydown(function(event){
    if(event.keycode == 123){
        return false;
    }
    else if(event.ctrlkey && event.shiftkey && event.keycode == 76){
       return false;
    }
});

document.addEventListener('contextmenu',event => event.preventDefault());