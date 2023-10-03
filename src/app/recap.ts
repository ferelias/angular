const username: string = 'Ferelias';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(5,8);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const nico = new Person(25, 'Nicolas');
nico.age;
nico.lastName;

