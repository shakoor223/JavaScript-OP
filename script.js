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



// Classes are not Hoisted
// Classes are first class citizens
// [means we can pass them in functions and also return them from functions]
// Classes are executed in strict mode 


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

// Every obj in JavaScript can have setter and getter property
const account = {
    owner: 'Shakir',
    movments: [200,400,570,650],


get latest(){
    return this.movments.slice(-1).pop();
},
 set latest (mov){
    this.movments.push(mov)
 },

}
console.log(account.latest);


account.latest = 50;
console.log(account.movments);

/////////////////////////////
/////////////////////////////
// Using Object.Create

const PersonProto = {
calcAge() {
    console.log(2024 - this.birthYear);  
},


///////////////
init(firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
 }
};
const sahil = Object.create(PersonProto);
console.log(sahil);
sahil.name = 'sahil';
sahil.birthYear = 2008;
sahil.calcAge();

console.log(sahil.__proto__ === PersonProto);

const ram = Object.create(PersonProto);
ram.init('sahil', 1955);
ram.calcAge();
////////////////////////////
// INheritance between 'Classes' Constructor Function

const Person1 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    
};

Person1.prototype.calcAge = function (){
    console.log(2024 - this.birthYear);
    
};

const Student = function(firstName, birthYear, course){
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    // So the call Method will indeed call this function but we will able to specify the this keyword here as the first argument in this function
    Person.call(this, firstName,birthYear)
    this.course = course;
};


// linking
Student.prototype = Object.create(Person1.prototype)
// with this the student dot prototype object is now an object that inherits from person dot prototype 
// We have to create this connection here before we add any more methods to the prototype object of student, And that's because object dot create  will return an empty object And so at this point student dot prototype is empty And so then onto that empty object we can add methods like this one

Student.prototype.introduce = function (){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
    
};

const mike = new Student ('mike', 2027, 'computerScience');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
/////////////////////////////////
const car= function (make, speed){
    this.make= make;
    this.speed = speed;
    // console.log(this);
    }
    
    
    //implementing an accelerate method
    car.prototype.accelerate = function () {
        // console.log(this.speed += 10);bmw.brake();bmw.brake();
        this.speed += 10;
        console.log(`${this.make}is going at ${this.speed}`);
        
    }
    
    
    // implementing an brake method
    car.prototype.brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}`);
        
    }
    const bmw1= new cars ('BMW', 120)
    const mercedes1 = new cars ('Mercedes', 95)
    


const EV = function(make,speed,batteryCharge){
    car.call(this, make,speed)
    this.batteryCharge = batteryCharge;
}

// Link the prototypes
EV.prototype = Object.create(car.prototype);


EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
};

EV.prototype.accelerate = function(){
    this.speed +=20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} with a charge of ${this.charge}`);
}

const tesla  = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////
// Using classes
// This code defines a class StudentCl that extends another class personCL. The StudentCl class is a subclass of personCL, which means it inherits properties and methods from personCL.
class StudentCl extends personCL {
    constructor (fullName, birthYear, course){

        // Always needs to happen first!
        // and that's becoz this call to the super function is respionsible for creating the this keyword in thsi subclass. And so therefore without doing this we wouldn't be able to access the this keyword to do this
        super (fullName, birthYear)
        this.course = course;
    }

    introduce(){
        console.log(`my name is ${this.firstName} and i study ${this.course}`);
        
    }
}
const martha = new StudentCl('marth', 2014, 'computer Science')
martha.introduce();
martha.calcAge();

//////////////////
// Inheritance Between "classes: object.create"
const PersonProto1 = {
calcAge(){
    console.log(2024 - birthYear);
    
},
init(firstName, birthYear){
    this.firstName= firstName;
    this.birthYear= birthYear;
}
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto1);
// so basically the child prototype can resuse this init method from the person prototype which is the parent prototype
StudentProto.init = function (firstName,birthYear,course) {
PersonProto.init.call(this, firstName,birthYear);
this.course = course;
}

const jay = Object.create(StudentProto)

jay.init('jay',2004,'computer')