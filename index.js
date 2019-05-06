//first JS
console.log('Hello World');

let name='Amila';
const interestRate=1;
console.log(name);
console.log(interestRate);

//Objects
let person ={
 nameOne:'Amila',
 ageOne: 23

};
//dotNotation
person.ageOne=30;

console.log(person.ageOne);

//Bracket Notation
person['nameOne']='Pasan';

console.log(person.nameOne);

let selectedColours=['red','blue'];
selectedColours[2]='green';
selectedColours[3]=1;
console.log(selectedColours);

//array is a object in JS
console.log(selectedColours.length);

//functions

function greet(name,lastName){
    console.log('Hello '+ name+' '+ lastName);
}

greet('Amila','Weerasinghe');

function square(number){
return number*number;
}

console.log(square(2));