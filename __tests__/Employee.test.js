const Employee = require("./Employee");

test("Can create an Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Can set name through constructor", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Can set ID through constructor", () => {
    const id = 101;
    const employee = new Employee("Jane", id);
    expect(employee.id).toBe(id);
});

test("Can set email through constructor", () => {
    const email = "jane@example.com";
    const employee = new Employee("Jane", 102, email);
    expect(employee.email).toBe(email);
});

test("Can get name through getName()", () => {
    const name = "John";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Can get ID through getId()", () => {
    const id = 101;
    const employee = new Employee("Jane", id);
    expect(employee.getId()).toBe(id);
});

test("Can get email through getEmail()", () => {
    const email = "jane@example.com";
    const employee = new Employee("Jane", 102, email);
    expect(employee.getEmail()).toBe(email);
});

test("getRole() should return 'Employee'", () => {
    const employee = new Employee("Jane", 102, "jane@example.com");
    expect(employee.getRole()).toBe("Employee");
});
