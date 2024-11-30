'use strict';
const Person = function(firstName, birthYear) {
// Instance properties
this.firstName = firstName;
this.birthYear = birthYear;


// Never do this
// this.calcAge = function() {
//     console.log(2024 - this.birthYear); 
// }
}

//  Shakir is a instance of Person
 const shakir = new Person ('shakir', 2007);
 const sehran = new Person  ('sehran', 2008)
 console.log(shakir, sehran);
 
// Recape of all that
// we are calling this constructor function with the new keyword 
// New empty obj is created
// Fun is called then there the this keyword is that empty object
// In the fun we start to set the properties to that obj


// 1. New {} is created
// 2. Then afterwards fun is called and in this function call the this keyword will be set to this newly created object
// 3. This newly created object is linked to a prototype
// 4. last step the object that was created in the beginning is the automatically returned from the constructor function


// Prototypes
Person.prototype.calcAge = function() {
        console.log(2024 - this.birthYear); 
    }
shakir.calcAge();
sehran.calcAge();
// Why that works is bacause any object always has access to the methodes and properties from its prototype And the prototype of shakir and sehran is person.prototype 

// We can confirm that because each obj has a special property called
console.log(shakir.__proto__);
// It is not the prototype property but it is simply  the prototype. so the prototype  of the shakir object is essentially the prototype property of the constructor function 
console.log(shakir.__proto__=== Person.prototype);
// Person.prototype here is actually not the prototype of person
// But instead it is what's gonna be used as the prototype of all the objects that are created with the person constructor function

console.log(shakir.__proto__);
// Checking prototype of shakir's prototype
console.log(shakir.__proto__.__proto__);
console.log(shakir.__proto__.__proto__.__proto__);



const arr = [3,6,5,8,7,9];
console.log(arr.__proto__);
console.log(arr);


// Using constructor function 
const cars = function (bmw, speed){
this.carname= bmw;
this.speed = speed;
// console.log(this);
}

const bmw = new cars ('BMW', 120)
const mercedes = new cars ('Mercedes', 95)

//implementing an accelerate method
cars.prototype.accelerate = function () {
    // console.log(this.speed += 10);bmw.brake();bmw.brake();
    this.speed += 10;
    console.log(`${this.carname}is going at ${this.speed}`);
    
}


// implementing an brake method
cars.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.carname}is going at ${this.speed}`);
    
}

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.brake();


class personCL {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Here methods will be added to the prototype property
    calcAge() {
        console.log(2024 - this.birthYear);
        
    }
}

const ahsan = new personCL  ('ahsan' , 2012);
console.log(ahsan);

ahsan.calcAge();

