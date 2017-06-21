describe("employee", function() {
    var employee; // Note the scoping of this variable.

    beforeEach(function() {
        employee = new Employee("Varun");
    });

    it("has a name", function() {
        expect(employee.name).toBeDefined();
    });

    it("has a role", function() {		
        expect(employee.role).toBeDefined();
    });

});