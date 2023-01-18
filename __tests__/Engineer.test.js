const Engineer = require("./Engineer");

test("Can set GitHub username through constructor", () => {
    const githubUsername = "johnDoe";
    const engineer = new Engineer("John", 1001, "john@example.com", githubUsername);
    expect(engineer.github).toBe(githubUsername);
});

test("getRole() should return 'Engineer'", () => {
    const engineer = new Engineer("John", 1001, "john@example.com", "johnDoe");
    expect(engineer.getRole()).toBe("Engineer");
});

test("Can get GitHub username through getGithub()", () => {
    const githubUsername = "johnDoe";
    const engineer = new Engineer("John", 1001, "john@example.com", githubUsername);
    expect(engineer.getGithub()).toBe(githubUsername);
});
