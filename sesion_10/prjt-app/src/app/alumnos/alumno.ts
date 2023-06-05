export class Alumno {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;

    constructor(id : number, nombre : string, apellido:string, edad:number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    
    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    
}
