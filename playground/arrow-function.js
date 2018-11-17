const square = x => x * x;

console.log(square(9));

const greet = {
  name: 'Marcio',
  sayHi: () => {
    console.log(`Hi ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi ${this.name}`);
    console.log(`Hi, my name is ${greet.name}`);
    console.log(arguments);
  },
};

greet.sayHi();
greet.sayHiAlt(1,2,3)
