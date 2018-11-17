// var obj = {
//   name: 'Marcio',
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(typeof obj);
// console.log(obj);
//

// var personString = '{"name": "Marcio", "age": 35}';
//
// var person = JSON.parse(personString);
//
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let notes = [];

const originalNote = {
  title: "Some title",
  body: "Some body",
};

const originalNote2 = {
  title: "Some title2",
  body: "Some body2",
};

notes.push(originalNote);
notes.push(originalNote2);

fs.writeFileSync('notes.json', JSON.stringify(notes));

const noteString = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof noteString);
console.log(noteString);
