let nr=0;

// obsługa kółka myszy: od siebie - wstecz; do siebie - naprzód:

document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        przesunNaprzod();
    } else {
        przesunWstecz();
    }
});

function przesunNaprzod(){

document.getElementById("demo").innerHTML = "--->";
obrot();
};

function przesunWstecz(){document.getElementById("demo").innerHTML = "<---";
obrot_wstecz();
};

function obrot() {
  nr+=1
  const flipBox = document.getElementById("flip"+nr);


  flipBox.classList.toggle('active');
  document.getElementById("flip"+nr).style.zIndex *=-1;


}

function obrot_wstecz() {

  const flipBox = document.getElementById("flip"+nr);
  document.getElementById("flip"+nr).style.zIndex =5-nr;

  flipBox.classList.toggle('active');

  nr-=1

}

// Obracanie automatyczne co 5 sekund
//setInterval(obrot, 1000);
