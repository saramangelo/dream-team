class Employee {
  // constructor
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // methods
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

// on index.js --> conditional, if intern, use this card, if manager, use this card, if engineer, use this card...
