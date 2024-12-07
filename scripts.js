const listaCalificaciones = [];
const listaElement = document.getElementById('listaCalificaciones');
const resultadoFinal = document.getElementById('resultadoFinal');

document.getElementById('agregar').addEventListener('click', () => {
    const asignatura = document.getElementById('asignatura').value.trim();
    const calificacion = parseFloat(document.getElementById('calificacion').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (asignatura && calificacion && peso) {
        listaCalificaciones.push({ asignatura, calificacion, peso });

        const li = document.createElement('li');
        li.textContent = `${asignatura}: ${calificacion} (Peso: ${peso}%)`;
        listaElement.appendChild(li);

        // Limpiar campos
        document.getElementById('asignatura').value = '';
        document.getElementById('calificacion').value = '';
        document.getElementById('peso').value = '';
    } else {
        alert("Por favor completa todos los campos correctamente.");
    }
});

document.getElementById('calcularPromedio').addEventListener('click', () => {
    if (listaCalificaciones.length === 0) {
        resultadoFinal.textContent = "Por favor ingresa datos antes de calcular.";
        resultadoFinal.style.color = "red";
        return;
    }

    let totalPeso = 0;
    let sumaPonderada = 0;

    listaCalificaciones.forEach(({ calificacion, peso }) => {
        sumaPonderada += calificacion * (peso / 100);
        totalPeso += peso;
    });

    if (totalPeso !== 100) {
        resultadoFinal.textContent = `El peso total no es 100%. Actualmente es ${totalPeso}%. Ajusta los pesos.`;
        resultadoFinal.style.color = "red";
    } else {
        resultadoFinal.textContent = `Tu promedio ponderado es: ${sumaPonderada.toFixed(2)}`;
        resultadoFinal.style.color = "green";
    }
});
