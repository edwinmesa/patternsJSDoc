/**
 * Se crea un objecto con new, this se usa para para ayudar a definir
 * nuevas propiedades y metodos para el objecto.
 */

function Car(model) {
    this.model = model;
    this.color = "silver";
    this.year = "2019";

    this.getInfo = function () {
        return "Tu Carro es de color "+ this.color + " "+ this.model + " Modelo " + this.year;
    }
}

/**Creacion de la instancia */
var myCar = new Car("Ford");
myCar.year = "2019";
console.log(myCar.getInfo());