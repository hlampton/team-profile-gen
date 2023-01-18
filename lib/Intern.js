const  Intern = require("./Employee");

class  Intern extends Staff {
    constructor(fullName, identification, contact, institution) {
        super(fullName, identification, contact);
        this.institution = institution;
    }
    getJobTitle() {
        return "Intern";
    }
    getInstitution() {
        return this.institution;
    }
}

module.exports =  Intern;

