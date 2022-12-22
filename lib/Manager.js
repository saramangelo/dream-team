const Employee = require("./Employee");

class Manager extends Employee {
    // constructor
    constructor(name, id, email, office){
        super(name, id, email)
this.office = office;
}

// methods

getRole(){
    return "Manager";
};
}

module.exports = Manager;