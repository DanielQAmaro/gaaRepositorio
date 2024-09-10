let count = 0;
const button = document.getElementById('clickButton');
const display = document.getElementById('clickCount');

const buttonrest = document.getElementById('clicButtonResta');

button.addEventListener('click', function() {
    count++;
    display.textContent = `Has hecho clic ${count} veces.`;
});

buttonrest.addEventListener('click',function() {
    count--;
    display.textContent = `Has hecho clic ${count} veces.`
})
