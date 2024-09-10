document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;

    // Llamar a la función para agregar el alumno
    agregarAlumno(nombre, apellido, edad);

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
});

// Función para agregar un alumno a la tabla
function agregarAlumno(nombre, apellido, edad) {
    const tabla = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    // Crear una nueva fila y celdas
    const nuevaFila = tabla.insertRow();

    const celdaNombre = nuevaFila.insertCell(0);
    const celdaApellido = nuevaFila.insertCell(1);
    const celdaEdad = nuevaFila.insertCell(2);

    // Asignar los valores a las celdas
    celdaNombre.textContent = nombre;
    celdaApellido.textContent = apellido;
    celdaEdad.textContent = edad;
}
