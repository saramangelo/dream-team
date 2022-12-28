const Employee = require("./Employee");

class Engineer extends Employee {
  // constructor
  constructor(name, id, email, github) {
    super(name, id, email);

    // specific to engineer
    this.github = github;
  }

  // methods
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
