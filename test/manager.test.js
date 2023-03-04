const Manager = require("../lib/manager");

describe("Intern", () => {
    describe("getRole", () => {
        it("should return the entered name", () => {
            const manager = new Manager(
                "John",
                "1",
                "johndoe@gmail"
            );
            const managerRole = manager.getRole();
            expect(managerRole).toEqual("Manager");
        });
    });

    describe("getName", () => {
        it("should return the entered name", () => {
            const manager = new Manager(
                "John",
                "1",
                "johndoe@gmail"
            );
            const managerName = manager.getName();
            expect(managerName).toEqual("John");
        });
    });

    describe("getId", () => {
        it("should return the entered id", () => {
        const manager = new Manager(
            "John",
            "1",
            "johndoe@gmail"
        );
        const managerId = manager.getId();
        expect(managerId).toEqual("1");
    });
});

describe("getEmail", () => {
    it("should return the entered email", () => {
        const manager = new Manager(
            "John",
            "1",
            "johndoe@gmail"
        );
        const managerEmail = manager.getEmail();
        expect(managerEmail).toEqual("johndoe@gmail");
});
});

describe("getOfficeNumber", () => {
    it("should return the entered office number", () => {
        const manager = new Manager(
            "John",
            "1",
            "johndoe@gmail",
            "209-844-1837"
        );
        const managerextensionNumber = manager.getextensionNumber();
        expect(managerextensionNumber).toEqual("209-844-1837");
    });
});
});