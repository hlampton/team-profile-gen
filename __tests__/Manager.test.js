const Manager = require("./Manager");
const Employee = require("./Employee");

test("Can set office number through constructor", () => {
    const officeNumber = 123;
    const manager = new Manager("John", 1003, "john@example.com", officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
});

test("getRole() should return 'Manager'", () => {
    const manager = new Manager("John", 1003, "john@example.com", 123);
    expect(manager.getRole()).toBe("Manager");
});

test("Can get office number through getOfficeNumber()", () => {
    const officeNumber = 123;
    const manager = new Manager("John", 1003, "john@example.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});
