var nombre = "Nestor Kauil";
var edad = 25;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log("Exercise #1: ", PERSONAJE);
;
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log("Exercise #2: ", batman);
var resultadoDoble = function (a, b) {
    return (a + b) * 2;
};
console.log("Exercise #3: ", resultadoDoble(2, 2));
var getAvenger = function (nombre, poder, arma) {
    if (poder === void 0) { poder = "volar"; }
    if (arma === void 0) {
        arma = "arco";
    }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma + " ";
    }
    else {
        mensaje = nombre + " tiene un " + poder;
        mensaje = nombre + " tiene un: " + poder;
    }
    return mensaje;
};
console.log("Exercise #4: ", getAvenger("Mujer maravilla"));
console.log("Exercise #4.1: ", getAvenger("Mujer maravilla", "ser inmortal", "lazo de la verdad"));
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var clase = new Rectangulo(2, 3);
console.log("Exercise #5: ", clase.calcularArea());
