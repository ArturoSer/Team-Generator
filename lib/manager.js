const Employee = require("./employee")

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email)
        this.extensionNumber = extensionNumber
    }
    getextensionNumber() {
        return this.extensionNumber
    }
    getRole() {
        return "Manager"
    }
}
module.exports = Manager;