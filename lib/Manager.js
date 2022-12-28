const Employee = require("./Employee");

class Manager extends Employee {
  // constructor
  constructor(name, id, email, office) {
    super(name, id, email);

    // specific to manager
    this.office = office;
  }

  // methods

  getOffice(){
    return this.office;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
