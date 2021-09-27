let countfrom = 10;
let timer = document.getElementById("countdown");

setInterval( function(){ 
  countfrom = countfrom - 1
  if (countfrom <= 0) {
    timer.innerText = "Happy Independance Day!";
  } else {
    timer.innerText = countfrom;
  }
}, 1000);


