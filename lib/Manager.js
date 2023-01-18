const Employee = require("./Employee");

class Manager extends Staff {
    constructor(fullName, identification, contact, office) {
        super(fullName, identification, contact);
        this.office = office;
    }
    getJobTitle() {
        return "Manager";
    }
    getOffice() {
        return this.office;
    }
}

module.exports =  Manager ;