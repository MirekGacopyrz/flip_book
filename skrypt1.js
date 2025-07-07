let nr = 1;
let nr_max = 8; // liczba stron

// Inicjalizacja z-index dla wszystkich stron na początku
for (let i = 1; i <= nr_max; i++) {
    const flipBox = document.getElementById("flip" + i);
    if (flipBox) flipBox.style.zIndex = (nr_max + 1) - i;
}

// Obsługa kółka myszy: od siebie - wstecz; do siebie - naprzód:
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

function przesunNaprzod() {
    if (nr < nr_max) {
        obrot();
        nr += 1;
    }
    document.getElementById("komunikat").innerText = "rozkładówka " + nr + " z " + nr_max;
}

function przesunWstecz() {
    if (nr > 1) {
        nr -= 1;
        obrot_wstecz();
    }
    document.getElementById("komunikat").innerText = "rozkładówka " + nr + " z " + nr_max;
}

function obrot() {
    const flipBox = document.getElementById("flip" + nr);
    flipBox.classList.toggle('active');
    // Strona przewrócona ma niższy z-index
    flipBox.style.zIndex = nr-1;
}

function obrot_wstecz() {
    const flipBox = document.getElementById("flip" + nr);
    flipBox.classList.toggle('active');
    // Strona cofnięta ma wyższy z-index
    flipBox.style.zIndex = (nr_max + 1) - nr;
}

// Jeśli chcesz, możesz automatycznie przewracać strony (odkomentuj poniższą linię)
// setInterval(obrot, 5000);
