import Person from "./person";

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  // Method overriding
  getRole() {
    return "Student";
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
  }
}

export default Student;
