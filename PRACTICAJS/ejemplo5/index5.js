document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los valores de los campos
    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();

    // Obtener el elemento del mensaje
    const message = document.getElementById('message');

    // Validar que todos los campos estén llenos
    if (name === '' || age === '' || email === '' || lastname === '') {
        message.textContent = 'Por favor, complete todos los campos.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Formulario enviado exitosamente.';
        message.style.color = 'green';

        // Limpiar el formulario
        document.getElementById('dataForm').reset();
    }
});


