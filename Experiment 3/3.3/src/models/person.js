class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getRole() {
    return "Person";
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}`;
  }
}

export default Person;
