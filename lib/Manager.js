const Employee = require("./Employee");

class Manager extends Employee {
  // constructor
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    // specific to manager
    this.officeNumber = officeNumber;
  }

  // methods

  getOfficeNumber(){
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
