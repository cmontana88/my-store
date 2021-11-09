const username: string = 'Carlos';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,2);

class Person {

  constructor(private age: number, public lastName: string) {}
}

const nico = new Person(33, 'Montaña');
