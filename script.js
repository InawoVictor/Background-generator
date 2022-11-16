var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('body');

function setGradient(){
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'; 
    h3.textContent =  body.style.background + ';';
}


color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);


// class Player {
//     constructor(name, type){
//         this.name = name;
//         this.type = type;
//     }
//     introduce(){
//         console.log(`I'm a ${this.name}, I'm a ${this.type}`)
//     }
// }

// class Wizard extends Player{
//     constructor(name, type){
//         super(name, type);
//     }
//     play(){
//         console.log(`WEEEEEEEE! I am a ${type}`);
//     }
// }

// const wizard1 = new Wizard('Shally', 'healer');
// const wizard2 = new Wizard('Mike', 'Dark Magic')

// wizard1.play();

// NA
// function Person(name){
//     this.name = name
// }

// friends = ['Bobby', 'Liuke', 'Mark'];
// Person.prototype.friends6 = function (friend){
//     let arr = friend.map( el => `${this.name} is friends with ${el}`)
//     console.log(arr);
// }

// new Person('John').friends6(friends)

// DESTRUCTURING
// function calcRetirementAge (years){
//     const age =  new Date().getFullYear() - years;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcRetirementAge(1990);
// console.log(age);
// console.log(retirement);

var Person = function(name,yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function(){
    const age = new Date().getFullYear - this.yearOfBirth;
    return age;
};

const john = new Person('John', 2006, 'teacher');

class Person2{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge(){
        const age = new Date().getFullYear - this.yearOfBirth;
        return age;
    }
}


const mary = new Person2('Mary', 2000, 'dancer');

function arr(...years){
    console.log(years);
}

const yrs = arr(123,456,789,135);

