class Employee {
  constructor(fullName, identification, contact) {
      this.fullName = fullName;
      this.identification = identification;
      this.contact = contact;
  }

  getFullName() {
      return this.fullName
  }

  getId() {
      return this.identification
  }

  getContact() {
      return this.contact
  }

  getJobTitle() {
      return 'Employee';
  }
}

module.exports = Employee;
