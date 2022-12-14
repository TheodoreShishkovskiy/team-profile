const Intern = require("../lib/Intern");

test("setting school via the constructor argument", () => {
    const testValue = "University of North Carolina at Charlotte";
    const employee = new Intern("Theodore", 1, "test@cheese.com", testValue);
    expect(employee.school).toBe(testValue);
})

test("getRole function", () => {
    const testValue = "Intern";
    const employee = new Intern("Theodore", 1, "test@cheese.com", testValue);
    expect(employee.getRole()).toBe(testValue);
})

test("Get School", () => {
    const testValue = "University of North Carolina at Charlotte";
    const employee = new Intern("Theodore", 1, "test@cheese.com", testValue);
    expect(employee.getSchool()).toBe(testValue);
});