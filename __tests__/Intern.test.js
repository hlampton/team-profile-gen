const Intern = require("./Intern");

test("Can set school through constructor", () => {
    const school = "Harvard";
    const intern = new Intern("Jane", 1002, "jane@example.com", school);
    expect(intern.school).toBe(school);
});

test("getRole() should return 'Intern'", () => {
    const intern = new Intern("Jane", 1002, "jane@example.com", "Harvard");
    expect(intern.getRole()).toBe("Intern");
});

test("Can get school through getSchool()", () => {
    const school = "Harvard";
    const intern = new Intern("Jane", 1002, "jane@example.com", school);
    expect(intern.getSchool()).toBe(school);
});

