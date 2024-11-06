// Beskriver testsviten för MoviesList-komponenten
describe("MoviesList Component", () => {
  // Körs innan varje test och besöker huvud-URL:en för att starta om sidan
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  // Testar om beskrivningen visas på sidan
  it("should display the description", () => {
    cy.contains("Description:").should("exist");
  });

  // Testar om filmens titel visas på sidan
  it("should display the movie title", () => {
    cy.contains("Movies").should("exist");
  });

  // Testar om "Add to Favorite"-knappen visas på sidan
  it("should display the add to favorite button", () => {
    cy.contains("Add to Favorite").should("exist");
  });

  // Testar om "View Details"-knappen visas på sidan
  it("should display View Details", () => {
    cy.contains("View Details").should("exist");
  });
});
