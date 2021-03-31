const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn")
const color = document.querySelector(".hexcode")

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function() {
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


// Tutorial for the JS part: https://www.youtube.com/watch?v=T4Vy92qS6KI