var persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    peso: 75,
    email: "jperez@gmail.com",
    altura: 1.80,
    sexo: "M",
    casado: false,
    hijos: null,
    mascotas: ["perro", "gato", "pez"],
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 742,
        ciudad: "Springfield",
        pais: "Estados Unidos"
    },
    saludar: function() {
        return "Hola, mi nombre es " + this.nombre + " " + this.apellido;
    }
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.peso);
console.log(persona.altura);
console.log(persona.sexo);
console.log(persona.casado);
console.log(persona.hijos);
console.log(persona.mascotas);
console.log(persona.direccion);
console.log(persona.saludar());