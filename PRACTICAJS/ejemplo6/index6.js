const toggleListBtn = document.getElementById('toggleListBtn');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

// Variable para llevar la cuenta de cuántos elementos se han agregado
let itemCount = 4;

// Función para ocultar o mostrar la lista
toggleListBtn.addEventListener('click', function() {
    if (itemList.style.display === 'none') {
        itemList.style.display = 'block';
        toggleListBtn.textContent = 'Ocultar Lista';
    } else {
        itemList.style.display = 'none';
        toggleListBtn.textContent = 'Mostrar Lista';
    }
});

// Función para agregar un nuevo elemento a la lista
addItemBtn.addEventListener('click', function() {
    itemCount++; // Incrementamos el contador de elementos
    const newItem = document.createElement('li');
    newItem.textContent = `Elemento ${itemCount}`;
    itemList.appendChild(newItem);
});
