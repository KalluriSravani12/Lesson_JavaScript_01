/*Introduction*/
//Hello World!
console.log('Hello,world!');
console.log('This is my webpage');
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

let SravaniAdvanced={
    firstName: 'SRAVANI',
    lastName:'KALLURI',
    age: 28,
    hobbies:['programming','reading','games']
};
console.log(SravaniAdvanced);//OBJECT
let SravaniJSON= JSON.stringify(SravaniAdvanced);// Object to JSON
console.log(SravaniJSON);
console.log(JSON.parse(SravaniJSON));//Back to object
//Loop over obbject
for(let propertyName in SravaniAdvanced){
    let propertyValue = SravaniAdvanced[propertyName];
    console.log(propertyName,propertyValue);
}
//Loop through object and array inside of object
for(let propertyName in SravaniAdvanced){                      //loop over object
    let propertyValue = SravaniAdvanced[propertyName];         //Get value from key
    if(Array.isArray(propertyValue)==true){                    // Check if array?
        for(let hobby of propertyValue){                       //loop over array(in is for object, of is for arrays)
            console.log("Hobby: "+ hobby)
        }
    }else{
        console.log(propertyName + ":"+ propertyValue)
    }
}

//Connection to html
// Ask JS to create a new element
let myDiv = document.createElement('div')
//Add some HTML
myDiv.innerHTML = `
    <h1> Hello from JS!</h1>
    <p>This text is from Javascript, my age is ${Sravani.age}</p>
`;
// Grab the body tag
let body = document.querySelector('body');

//Add the div to the HTML
body.append(myDiv);
//Another way to add data
let myBands=[
{
    name: 'The Beatles',
    genre:'pop'
},
{
    name: 'The rolling stones',
    genre:'Rock'
}
];
//Grab the bands div
let bandsDiv= document.querySelector('#bands');
for(let band of myBands){
    bandsDiv.innerHTML += `
        <div class="band">
            <h2>${band.name}</h2>
            <p> Genre: ${band.genre}</p>
        </div>
    
    `;
}
//Functions
function sayHello(){
    console.log('Hello');
}
const sayHello2= () => {
    console.log('Hello 2');

}
sayHello();
sayHello2();

//Different ways of declaring the same function
function add(a,b){
    return a+b;
}
//Arrow fuction
const add2= (a,b) => {
    return a+b;
}
//Function expression
const add3= function(a,b) {
    return a+b;
}
// Arrow function with implicit return
const add4 = (a,b) => a+b;

//Arrow function with implicit return and one parameter
const add5 = a => a+5;
console.log(add(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
console.log(add4(1,2));
console.log(add5(1));

class Person{
    constructor(name, age, hobby){// fiields of the class
        this.name=name;
        this. age= age;
        this.hobby= hobby;
    }
    greeting(){//class methods
        console.log(`Hi, my name is ${this.name} and I am ${this.age} `);
        console.log('I enjoy : '+ this.hobby);

    }
    

}
const SravaniClass = new Person ('Sravani', 28 ,'Dancing');
    SravaniClass.greeting();
    console.log(SravaniClass.hobby);
