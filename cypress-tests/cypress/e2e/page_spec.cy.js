describe("home page spec", () => {
	it("passes", () => {
		cy.visit("http://localhost:3000");
		cy.document().should("have.property", "charset").and("eq", "UTF-8");
		cy.document().get("h1").contains("Welcome");
	});
});
