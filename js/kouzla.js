// alert("Ahoj světe" + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".repeat(5));

// Deklarace konstant, ktere odkazuji na prvky webove stranky podle ID
const fotka = document.getElementById("fotka");
const kouzelnyText = document.getElementById("kouzelnyText");
const dec = document.getElementById("dec");
const convert = document.getElementById("convert");
const result = document.getElementById("result");

// Funkce pro vytvoreni nahodne barvy podle RGB
function randomColor() {
    /* r g b - promenne pro jednotlive barevne slozky
    Math.round - vestavena funkce, ktera zaokrouhluje
    Math.random - vestavena funkce, ktera vygeneruje cislo mezi 0-1
    */
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

function randomFont(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

convert.addEventListener("click", function() {
    let decNumber = parseInt(dec.value);
    result.innerHTML = `BIN: <b>${decNumber.toString(2)}</b><br>
                        OCT: <b>${decNumber.toString(8)}</b><br>
                        HEX: <b>${decNumber.toString(16)}</b><br>`
})

fotka.addEventListener("mouseover", function() {
    fotka.width *= 2;
})

fotka.addEventListener("mouseout", function() {
    fotka.width /= 2;
})

kouzelnyText.addEventListener("click", function() {
    let txt = prompt("Zadej text: ");
    kouzelnyText.innerHTML = txt ? txt: "Zadej text";
    kouzelnyText.style.color = randomColor();

    const ranFont = randomFont(10, 50);
    kouzelnyText.style.fontSize = ranFont + "px";
    kouzelnyText.innerHTML += " | Velikost fontu " + ranFont;
})