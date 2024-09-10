let size = 20;
let colors = ["#ADD8E6", "#FFB6C1", "#98FB98", "#FFD700"];
let colorIndex = 0;
let font = 'Courier New';

document.getElementById("btnTexto").addEventListener("click", function () {
    size += 2;
    document.getElementById("titulo").style.fontSize = size + "px";
});

document.getElementById("btnFondo").addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});

document.getElementById('btnFuente').addEventListener('click', function() {
    document.getElementById("titulo").style.fontFamily = font;
})
