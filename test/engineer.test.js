const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("getRole", () => {
        it("should pass through the name when it is called", () => {
            const engineer = new Engineer(
                "John Doe",
                "1",
                "johndoe@example.com"
            );
            const engineerRole = engineer.getRole();
            expect(engineerRole).toEqual("Engineer");
        });
    });

    describe("getName", () => {
        it("should pass through the ID when it is called", () => {
            const engineer = new Engineer(
                "John Doe",
                "1",
                "johndoe@example.com"
            );
            const engineerName = engineer.getName();
            expect(engineerName).toEqual("John Doe");
        });
    });
    describe("getId", () => {
        const engineer = new Engineer(
            "John Doe",
            "1",
            "johndoe@example.com"
        );
        const engineerId = engineer.getId();
        expect(engineerId).toEqual("1");
    });

    describe("getEmail", () => {
        it("should pass through the email when it is called", () => {
            const engineer = new Engineer(
                "John Doe",
                "1",
                "johndoe@example.com"
            );
            const engineerEmail = engineer.getEmail();
            expect(engineerEmail).toEqual("johndoe@example.com");
        });
    });

    describe("getGithub", () => {
        it("should pass through the github when it is called", () => {
            const engineer = new Engineer(
                "John Doe",
                "1",
                "johndoe@example.com",
                "ArturoSer"
            );
            const engineerGithub = engineer.getGithub();
            expect(engineerGithub).toEqual("ArturoSer");
        });
    });
});