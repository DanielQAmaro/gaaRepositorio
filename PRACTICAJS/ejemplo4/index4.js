const toggleButton = document.getElementById('toggleButton');
const text = document.getElementById('text');

toggleButton.addEventListener('click', function() {
    if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
        toggleButton.textContent = 'Ocultar Texto';
    } else {
        text.classList.add('hidden');
        toggleButton.textContent = 'Mostrar Texto';
    }
});

const boton = document.getElementById('btnParrafo');
const text2 = document.getElementById('text2');

boton.addEventListener('click', function() {
    if(text2.classList.contains('ocultar')){
        text2.classList.remove('ocultar');
        boton.textContent = 'Ocultar texto 2';
    }else {
        text2.classList.add('ocultar');
        boton.textContent = 'Mostrar texto 2';
    }
});
