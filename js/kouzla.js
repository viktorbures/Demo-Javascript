// alert("Ahoj světe" + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".repeat(5));
const fotka = document.getElementById("fotka");
const kouzelnyText = document.getElementById("kouzelnyText");

const dec = document.getElementById("dec");
const convert = document.getElementById("convert");
const result = document.getElementById("result");


function randomColor() {
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