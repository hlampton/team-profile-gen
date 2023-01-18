const Employee = require("./Employee");

class Engineer extends Staff {
    constructor(fullName, identification, contact, git) {
        super(fullName, identification, contact);
        this.git = git;
    }

    getJobTitle() {
        return "Engineer";
    }

    getGit() {
        return this.git;
    }
}

module.exports = Engineer;
