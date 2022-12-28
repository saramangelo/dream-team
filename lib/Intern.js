const Employee = require("./Employee");

class Intern extends Employee {
  // constructor
  constructor(name, id, email, school) {
    super(name, id, email);

    // specific to intern
    this.school = school;
  }

  // methods
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
