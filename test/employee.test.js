const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("getRole", () => {
        it("should pass through the method getRole", () => {
        const employee = new Employee(
            "John",
            "1",
            "johexample@gmail.com"
        );
        const employeeName = employee.getRole();
    });
});

describe("GetId", () => {
    it("should pass through the stored ID when its method is called", () => {
        const employee = new Employee(
            "John",
            "1",
            "johexample@gmail.com"
        );
        const employeeId = employee.getId();
        expect(employeeId).toEqual("1");
    });
});

describe("getEmail", () => {
    it("should pass through the stored email when its method is called", () => {
    const employee = new Employee( 
        "John",
        "1",
        "johexample@gmail.com"
    );
    const employeeEmail = employee.getEmail();
    expect(employeeEmail).toEqual("johexample@gmail.com");
});
});
});