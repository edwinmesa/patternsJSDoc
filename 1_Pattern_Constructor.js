/**Patron Constructor
 * Un constructor es un metodo especial que se utiliza para inicializar un objeto recien
 * creado una vez que se le ha asignado en memoria.
 * Se utilizan para crear tipos especificos de objetos, tanto para preparar el objeto para
 * su uso como para aceptar argumentos que un constructor pueda usar para establecer los
 * valores de las propiedades y metodos de los miembros cuando se crea el objeto por 
 * primera vez. 
 */

 //Creacion de un Objecto

 var newObject = {};
 //o
 var newObject = Object.create(Object.prototype);
 //o
 var newObject = new Object();

 //1. Dot syntax
//set Properties
newObject.someKey = "hello world";
//get properties
var value = newObject.someKey;
console.log(value);

//2. Square bracket syntax
//set properties
newObject["someKey"] = "hello world 2";
//get properties
var value = newObject["someKey"];
console.log(value);

//3. Object defineProperty
//set properties
Object.defineProperty(newObject,"someKey",{
    value: "for more control of property's behavior",
    writable:true,
    enumerable:true,
    configurable:true
});
//short-hand
 var defineProp = function (obj, key, value) {
     var config = {
         value: value,
         writable:true,
         enumerable:true,
         configurable:true
     };
     Object.defineProperty(obj, key, config);
 };
 //creatye new epmty person object
 var person = Object.create(Object.prototype);
 console.log(person);
 //Object with properties
 defineProp(person, "car", "mazda");
 defineProp(person,"dateOfBirth","1981");
 defineProp(person,"hasBeard",false);
 console.log(person);

 //4. Object defineProperties

//set properties

Object.defineProperties(newObject,{
    "someKey":{
        value: "hello word 3",
        writable:true
    },
    "anotherKey":{
        value: "foo bar",
        writable:false
    }
})
//get
var value = newObject.anotherKey;
console.log(value);

//usage for inheritance, create another object
var driver = Object.create(person);
//set properties for driver and show property
defineProp(driver, "topSpeed","100mph");
console.log(driver.dateOfBirth);
console.log(driver.topSpeed);

//basic constructors
//this references the new object that's being create.

function myCar2(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return this.model + " has done "+this.miles + " miles";
    }
}
//usage: create new instances of the car
var civic = new myCar2("Honda Civic", 2009, 25444);
//view called 
console.log(civic.toString());

//Constructor with prototypes

function myCar3(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

    myCar3.prototype.toString = function () {
        return this.model + " has done "+this.miles + " miles";
    }
}
//Usage
var voyage = new myCar3("Voyage Automatic", 2019,169494);
console.log(voyage.toString() );