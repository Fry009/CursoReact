//variables y constantes

const nombre= 'Goju';
const apellido= 'Apellido';

const nombreCompleto=`${nombre}
 ${apellido} 
 Hola Mundo `

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola '+ nombre;
}

console.log(`Este es un texto ${getSaludo(nombre)}`)
