document.getElementById('studentForm').addEventListener('submit', addStudent);

let students = [];
let editIndex = null;

function addStudent(event) {
    //Eliminar el comportamiento normal de 'Submit'
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;

    if (!course) {
        alert("Por favor, selecciona un curso favorito.");
        return;
    }

    if (editIndex !== null) {
        students[editIndex] = { name, age, course };
        editIndex = null;
    } else {
        students.push({ name, age, course });
    }

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('course').value = '';

    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById('studentTable');
    
    // Limpiar el contenido previo de la tabla
    tableBody.innerHTML = '';
    
    // Generar las filas dinámicamente mediante la concatenación de cadenas
    students.forEach((student, index) => {
        const row = `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
                <td>
                    <button class="edit" onclick="editStudent(${index})">Editar</button>
                    <button class="delete" onclick="deleteStudent(${index})">Eliminar</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

/*
function editStudent(index) {
    document.getElementById('name').value = students[index].name;
    document.getElementById('age').value = students[index].age;
    document.getElementById('course').value = students[index].course;
    editIndex = index;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}
*/
