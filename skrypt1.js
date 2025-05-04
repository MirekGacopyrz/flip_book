let nr=1
let nr_max=8;//liczba stron
let z_index =0;//inicjalizacja z-indeksu

// obsługa kółka myszy: od siebie - wstecz; do siebie - naprzód:

document.addEventListener("wheel", function(event) {
    if (event.deltaY > 0) {
        przesunNaprzod();
    } else {
        przesunWstecz();
    }
});

document.addEventListener('keydown', (event) => {
      switch (event.key) {

        case 'ArrowLeft':
          przesunWstecz();
          break;
        case 'ArrowRight':
          przesunNaprzod();
          break;
      }
});

function przesunNaprzod(){
if (nr<nr_max)
  {
  obrot();
  nr+=1;

  };
document.getElementById("komunikat").innerText = "rozkładówka "+nr+" z "+nr_max;

};

function przesunWstecz(){
if (nr>1)
 {
  nr-=1;
  obrot_wstecz();

  };
document.getElementById("komunikat").innerHTML = "rozkładówka "+nr+" z "+nr_max;

};

function obrot() {

  const flipBox = document.getElementById("flip"+nr);


  flipBox.classList.toggle('active');
 z_index=document.getElementById("flip"+nr).style.zIndex;
 //document.getElementById("demo2").innerText = "z-index przed obrotem:"+z_index
 document.getElementById("flip"+nr).style.zIndex =-z_index;
 //document.getElementById("demo3").innerText = "z-index po obrocie:"+document.getElementById("flip"+nr).style.zIndex;

}

function obrot_wstecz() {

  const flipBox = document.getElementById("flip"+nr);
   z_index=document.getElementById("flip"+nr).style.zIndex;
   document.getElementById("flip"+nr).style.zIndex =99;
  flipBox.classList.toggle('active');

   //document.getElementById("demo2").innerText = "z-index przed obrotem:"+z_index;
  document.getElementById("flip"+nr).style.zIndex = -z_index;
  //document.getElementById("demo3").innerText = "z-index po obrocie:"+document.getElementById("flip"+nr).style.zIndex;





}

// Obracanie automatyczne co 5 sekund
//setInterval(obrot, 1000);
