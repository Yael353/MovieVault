describe("MoviesList Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display the description", () => {
    cy.contains("Description:").should("exist");
  });

  it("should display the movie title", () => {
    cy.contains("Movies").should("exist");
  });

  it("should display the add to favorite button", () => {
    cy.contains("Add to Favorite").should("exist");
  });

  it("should display View Details", () => {
    cy.contains("View Details").should("exist");
  });
});
