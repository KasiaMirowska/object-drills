'use strict';

function createMyObject() {
        return {
        student1: 'Emily',
        student2: 'Kasia',
        age: 30,
        studentShout: function() {
            console.log('we love coding!');
        }
    
    }
  }
 createMyObject().studentShout();


createMyObject.foo = 'foo';
createMyObject.bar = 'bar';
createMyObject.bizz = 'bizz';
createMyObject.bang = 'bang';
console.log(createMyObject);

function personMaker(){
    let person = {
        firstName: 'Jane',
        lastName: 'Hook',
        fullName: function(){
             return `${this.firstName} ${this.lastName}`;
        },
    };
    return person;
}
console.log(personMaker().fullName());


const myCats = {
  name: 'nibbs',
  name2: 'belle',
  age: 5,
};

function deleteKey(obj) {
  delete obj.age;
  return obj;
}

console.log(deleteKey(myCats));



function makeStudentsReport(data) {
  let studentArr = [];

  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    studentArr.push(`${element.name}: ${element.grade}`);
  }
  return studentArr;
}
const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentsReport(testData));




const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' }
];

function findById(items, idNum) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i];
    }
  }
}
console.log(findById(scratchData, 22));



const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago'
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria'
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  const newArr = Object.keys(object);

  if (newArr.length !== expectedKeys.length) {
    return false;
  }

  for (let i = 0; i < expectedKeys.length; i++) {
    if (expectedKeys[i] !== newArr[i]) {
      return false;
    }
  }
  return true;
}




const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/(this.flour * 100))
  }
}

console.log(loaf.hydration())



const obj1 = {
  foo: "hello",
  bar: 3,
  fum: "hi",
  quux: true,
  spam: 7,
}


function keyCaller(obj) {
  for (const key in obj) {
    console.log(key, obj[key]);
}
}

keyCaller(obj1);

//ARRAYS IN OBJECTS

const hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}
console.log(hobbitMeals.meals[3]);



//ARRAY OF OBJECTS

const people = [
  {name: 'bob', jobTitle: "builder", boss: 'jan'},
  {name: 'jane', jobTitle: "writer", boss: 'jan'},
  {name: 'holly', jobTitle: "designer", boss: 'jan'},
  {name: 'jan', jobTitle: "CE0"},
];


for (let i = 0; i < people.length; i++) {
  let person = people[i];
  let personJobTitle = person.jobTitle;
  let personName = person.name;
  console.log(personJobTitle, personName);
}
for (let i = 0; i < people.length; i++) {
  if (people[i].boss) {
    
    console.log(`"${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}."`)
  } else {
    console.log(`"${people[i].jobTitle} ${people[i].name} doesn't report to anybody."`)

  }
}


const cipherObj = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}

function decipher(obj, str) {
     let deciphered = '';
     let strArr = str.split(' ')
     let keysArr =Object.keys(obj);
     strArr.forEach(function(word){ 
        if(word[0] === keysArr[0]){
         deciphered += (word[obj.a-1])
        }
        else if (word[0] === keysArr[1]){
            deciphered += (word[obj.b-1])
        }
        else if (word[0] === keysArr[2]){
            deciphered += (word[obj.c-1])
        }
        else if (word[0] === keysArr[3]){
            deciphered += (word[obj.d-1])
        }
        else {
            deciphered += ' ';
        }
     });
     return deciphered;
    };

    console.log(decipher(cipherObj, 'craft block argon meter bells brown croon droop'));


// function decipher(obj, str) {
//     const deciphered = [];
//  let strArr = str.split(' ')
//  for (let i =0; i<strArr.length; i++){
//      switch(strArr[0]) {
//       case 'a' : return deciphered.push(strArr[1]);
//       case 'b' : return deciphered.push(strArr[2]);
//       case 'c' : return deciphered.push(strArr[3]);
//       case 'd' : return  deciphered.push(strArr[4]);
//       default: return deciphered.push(' ');
//      };
//   } 
//   return deciphered;

// }
const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

const sentence = 'craft block argon meter bells brown croon droop'

function decode( obj, str ) {
    const strArr = str.split(' ');
    const deciphered = strArr.map(word => {
        let retStr;
        if(obj[word[0]]) {
            retStr = obj[word[0]]-1
        }
        return retStr ? word[retStr] : ' ';
    });
    return deciphered.join('');
}

decode( cipher, sentence );



//Database Search:

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


function findOne(arr, obj){
  let objId = Object.keys(obj).toString();
  let objNum = Object.values(obj)[0];
  
  return arr.find(function(hero){
    if (objId in hero){
      if (hero[objId] === objNum) {
        return hero;
      }
    }
  });
}
console.log(findOne(HEROES, { id:3}));

//factory functions

function createCharacter(name,nickname,race, origin, attack, defense){
  return {
    name: name, // arr[0] vs. name
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(enemy){
      let given;
      let taken;
      if (this.defense > enemy.attack){
        taken = 0;
      } else {
        taken = Math.abs(this.defence - enemy.attack);
      }
      if (enemy.defense > this.attack) {
        given = 0;
      } else {
        given = Math.abs(enemy.defence - this.attack);
      }
      console.log(`Your opponent takes ${given} damage and you receive ${taken} damage`);
    }
  };
}
const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'Aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  createCharacter('Arwen Undomiel', 'arwen', 'half-elf', 'Rivendell', 22, 8)
];
console.log(characters);

const findAragorn = characters.find(function(item){
  return item.nickname === 'Aragorn';
});
findAragorn.describe();


const findHobbits = characters.filter(function(item){
  return item.race === 'Hobbit';
});

const fighters = characters.filter(function(item){
  return item.attack > 5;
});

console.log(createCharacter('kasia','km','imaginary','poland',12,23));
createCharacter('Jacob','Jake','Wizard','poland',12,23).evaluateFight({attack: 4, defence: 2});
console.log(findAragorn);

console.log(findHobbits);
console.log(fighters);