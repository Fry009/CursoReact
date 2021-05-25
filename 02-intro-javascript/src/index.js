const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'new yor',
        zip:2323235,
        lat:5655,
        long:236565
    }
}

console.log({persona});

const persona2={...persona};

persona2.nombre='Peter';
console.log(persona2);