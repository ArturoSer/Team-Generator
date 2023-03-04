const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("getRole", () => {
        it("should return the name when it is called", () => {
            const intern = new Intern( 
                "John Doe",
                "1",
                "johndoe@gmail"
            );
            const internRole = intern.getRole();
            expect(internRole).toEqual("Intern");
        });
    });

    describe("getName", () => {
        it("should return the name when it is called", () => {
            const intern = new Intern( 
                "John Doe",
                "1",
                "johndoe@gmail"
            );
            const internId = intern.getId();
            expect(internId).toEqual("1");
        });
    });

    describe("getEmail", () => {
        it("should return the email when it is called", () => {
            const intern = new Intern( 
                "John Doe",
                "1",
                "johndoe@gmail"
            );
            const internEmail = intern.getEmail();
            expect(internEmail).toEqual("johndoe@gmail");
        });
    });

    describe("getSchool", () => {
        it("should return the school when it is called", () => {
            const intern = new Intern(
                "John Doe",
                "1",
                "johndoe@gmail",
                "UW"
            );
            const internSchool = intern.getSchool();
            expect(internSchool).toEqual("UW");
        });
    });
});