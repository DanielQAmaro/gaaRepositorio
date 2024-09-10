// Selección de los botones
const colorButton = document.getElementById('colorButton');
const textColorButton = document.getElementById('textColorButton');

// Colores predefinidos
const colors = ['red', 'blue', 'green', 'black', 'white'];
const textColors = ['#333333', '#ff6600', '#0066cc', '#cc33ff', '#660066'];

// Cambiar color de fondo
colorButton.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Cambiar color de texto
textColorButton.addEventListener('click', function() {
    const randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
    document.body.style.color = randomTextColor;
});

