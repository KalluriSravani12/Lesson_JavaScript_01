/*Introduction*/
//Hello World!
console.log('Hello,world!');

//Variables
let greeting= 'Hej från en variabel';
console.log(greeting);
greeting =3;
console.log(greeting);
greeting ="Hello";
const PI=3.1415;

//Printing
//Concatenation
console.log(greeting +',PI is: '+PI);

//Interpolation and Templating
console.log(`${greeting},PI is: ${PI}`);

// Be careful with floats
console.log(0.1+0.2);

//Equality
console.log(1==1)//true
console.log(1=='1')//true-will convert to same type
console.log(1==='1')//false

//Loose typing and conversation
let myNumber=5;
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber + 5)//10

myNumber='5';
console.log(myNumber)
console.log(typeof myNumber)
console.log(myNumber + 5)//55
    
/*Control flows*/
//if
let myAge = 38;

if(myAge>=40){
    console.log('You are getting old');
}else{
    console.log('You are still young'); 
}
//Ternary operation, conditional statements
myAge===38 ?
         console.log('old'):
         console.log('not old');
// boolen statment ? true: false
/* 
camelCase//Praxis in JS functions, vars
PascalCase //Classes
snake_case// Often not used
*/
/* Loops ,arrays and objects*/
//for
for (let i=0;i<5;i++){
    console.log(i);
}

let persons=[
    'Sravani',
    'Vihaan',
    'Stars',
    'Sky'
];
//log entire array
console.log(persons);

//length of array
console.log(persons.length);
//Get the first person
console.log(persons[0]);
//Get the last person
console.log(persons[persons.length-1]);

//Get the slice of Array

let newPersons= persons.slice(0, 2);//first 2
console.log(newPersons);

//Add to start of array
persons.unshift('Acke');

//Add to end of array
persons.push('Lotta');

console.log(persons);
//Remove from strat of array
persons.shift();

//Remove from end of array
persons.pop();

console.log(persons);

//Loop over arrays
for(let person of persons){
    console.log(person);
}

//Older but still works
for(let i=0;i<persons.length;i++){
    console.log(persons[i]);
}
//Lambda loop
persons.forEach(x=> console.log(x));

//Objects
let Sravani ={
    firstName:'Sravani',
    lastName:'Kalluri',
    age: 28,
    hobby: 'Dancing'
};

 Sravani ={
    firstName:'Sravani',
    lastName:'Kalluri',
    age: 28,
    hobby: 'Dancing'
};
console.log(Sravani);





console.log(Sravani);
console.log(`First name: ${Sravani.firstName}`);
let sravStr = `${Sravani.firstName} ${Sravani.lastName}, age: ${Sravani.age}`;
console.log(sravStr);