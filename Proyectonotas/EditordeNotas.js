const fs = require('fs');
const readline = require('readline');
const path = require('path');

const rl = readline.createInterface({
    input: ProcessingInstruction.stdin,
    ouput: ProcessingInstruction.stdout
});

 function mostrarMenu(){
    console.log('\n1. Crear nueva nota');
    console.log('2. Eliminar nota');
    console.log('3. Salir');

    rl.question('Elige una opción: ', (opcion) =>{
        if(opcion === '1') crearNota();
        else if(opxion ==='2') eliminarNota();
        else if (opcion === '3'); rl.close();
        return mostrarMenu();
    });
 }

 function crearNota() {
    rl.question('Nombre de la nueva nota: ', (nombre) => {
        const nombreArchivo = `${nombre}.note`;
        rl.question('Escribe el contenido de la nota: ', (contenido) => {
            fs.writeFile(nombreArchivo, contenido, (err) => {
                if (err) console.log('Error al guardar la nota.');
                else console.log(`Nota "${nombre}" guardada.`);
                mostrarMenu();
            });
        });
    });
}

function eliminarNota() {
    rl.question('Nombre de la nota a eliminar: ', (nombre) => {
        const nombreArchivo = `${nombre}.note`;
        fs.unlink(nombreArchivo, (err) => {
            if (err) console.log('Error: Nota no encontrada.');
            else console.log(`Nota "${nombre}" eliminada.`);
            mostrarMenu();
        });
    });
}

mostrarMenu();