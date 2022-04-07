let nombre : string = "Nestor Kauil";
let edad : number = 25;
const PERSONAJE : { nombre: string, edad: number } = {
    nombre: nombre,
    edad: edad
};
console.log("Exercise #1: ", PERSONAJE);

interface Batman {
    nombre: string;
    artesMarciales: string[];
};

const batman: Batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};

console.log("Exercise #2: ", batman);

const resultadoDoble = (a: number, b: number) => {
    return (a + b) * 2; 
};
console.log("Exercise #3: ", resultadoDoble(2, 2));

const getAvenger = (nombre: string, poder?: string, arma: string = "0") => {
    if (arma === "0") {
        arma = "arco"; 
    }

    let mensaje;

    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma + " ";
    }
    else {
        mensaje = nombre + " tiene un arma: " + arma;
    }
    return mensaje;
};
console.log("Exercise #4: ", getAvenger("Mujer maravilla", "volar", "flecha"));

class Rectangulo {
    public base:number;
    public altura:number;
    
    constructor(base:number, altura:number) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea():number{
        return this.base * this.altura;
    }
}

let clase:Rectangulo = new Rectangulo(2,3);

console.log("Exercise #5: ", clase.calcularArea());