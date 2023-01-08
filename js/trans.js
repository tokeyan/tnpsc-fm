const tamilbtn = document.getElementById("tamil");
const engbtn = document.getElementById("english");
const tam = document.getElementById("tam");
const eng = document.getElementById("eng");

engbtn.addEventListener("click", () => {
    tam.style.display = "none";
    eng.style.display = "block";   
    engbtn.style.display = "none";
    tamilbtn.style.display = "block";
});

tamilbtn.addEventListener("click", () => {
    eng.style.display = "none";
    tam.style.display = "block";
    tamilbtn.style.display = "none";
    engbtn.style.display = "block";
});