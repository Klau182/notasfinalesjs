document.write(`
<div class="container mx-auto mt-4">
    <div class="row">
        <div class="col-6">
            <span> <h1>Notas Finales</h1> 
        </div>
        <div class="col-6 mx-0 text-end">
            <img height="50" src='assets/img/logo.png' alt='logo'></img> </span>
        </div>
    </div>
</div>
`);
// datos del estudiante
let nombre = prompt("Hola, ingresa tu nombre");
let carrera = prompt("¿Cual es tu carrera?");
//notas y promedio del primer ramo ingresado
let ramo1 = prompt("Ingresa Primer Ramo");
let nota1ramo1 = prompt(`Ingrese nota 1 [${ramo1}]`);
let nota2ramo1 = prompt(`Ingrese nota 2 [${ramo1}]`);
let nota3ramo1 = prompt(`Ingrese nota 3 [${ramo1}]`);
//((nota1+nota2+nota3) /3) *100
let promedio1 = (parseInt(nota1ramo1) + parseInt(nota2ramo1) + parseInt(nota3ramo1)) / 3
//notas y promedio del segundo ramo
let ramo2 = prompt("Ingresa Segundo Ramo");
let nota1ramo2 = prompt(`Ingrese nota 1 [${ramo2}]`);
let nota2ramo2 = prompt(`Ingrese nota 2 [${ramo2}]`);
let nota3ramo2 = prompt(`Ingrese nota 3 [${ramo2}]`);
let promedio2 = (parseInt(nota1ramo2) + parseInt(nota2ramo2) + parseInt(nota3ramo2)) / 3
//dos notas del tercer ramo
let ramo3 = prompt("Ingresa Tercer Ramo");
let nota1ramo3 = prompt(`Ingrese nota 1 [${ramo3}]`);
let nota2ramo3 = prompt(`Ingrese nota 2 [${ramo3}]`);
let aprobacion = 4;
let promedioNotaRamo3 = 3 * aprobacion - (parseInt(nota1ramo3) + parseInt(nota2ramo3));

//datos del estudiante
document.write(`
<div class="container mx-auto">
    <div class="row">
        <div class="col">
           Nombre:
        </div>
        <div class="col-9 text-start text-primary text-dark">
            ${nombre}
        </div>
    </div>

    <div class="row pb-4 pt-2">
        <div class="col">
            Carrera:
        </div>
        <div class="col-9 text-start text-primary text-dark">
            ${carrera}
        </div>
    </div>
    <table class="table">
        <thead class="table-dark">
            <tr>
                <th>Ramo</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Promedio</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${ramo1}</td>
                <td>${nota1ramo1}</td>
                <td>${nota2ramo1}</td>
                <td>${nota3ramo1}</td>
                <td>${promedio1}</td>
            </tr> 
            <tr>
                <td>${ramo3}</td>
                <td>${nota1ramo2}</td>
                <td>${nota2ramo2}</td>
                <td>${nota3ramo2}</td>
                <td>${promedio2}</td>
            </tr>
            <tr>
                <td>${ramo3}</td>
                <td>${nota1ramo3}</td>
                <td>${nota2ramo3}</td>
            </tr>
        </tbody>
    </table>
</div>
`);

//parrafo final
document.write(`
<div class="container mx-auto">
    <div class="row">
       <p> Para aprobar el ramo ${ramo3} con nota 4, necesitas obtener un ${promedioNotaRamo3} en la nota 3.</p>
    </div>
</div>
`);