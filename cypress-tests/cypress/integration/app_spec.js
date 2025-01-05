describe("App", () => {
	it("should load the home page", () => {
		cy.visit("/");
		cy.contains("Welcome");
	});
});
