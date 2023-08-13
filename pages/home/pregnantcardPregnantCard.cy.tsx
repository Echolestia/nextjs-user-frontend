import React from "react";
import PregnantCard from "./pregnantcard";

describe("<PregnantCard />", () => {
  it("renders the image with the correct week of pregnancy", () => {
    // Check that the image is visible and contains the correct alt text
    cy.get('[data-testid="pregnancy-image"]').should(
      "have.attr",
      "alt",
      `Week ${week} Pregnancy`
    );
  });

  it("renders the pregnancy week title", () => {
    // Verify the title is visible and contains the correct week
    cy.get('[data-testid="pregnancy-week-title"]')
      .should("be.visible")
      .should("contain.text", `Week ${week} Pregnancy`);
  });

  it("expands the card to show body text when clicked", () => {
    // Initially, the body should not be visible
    cy.get('[data-testid="pregnancy-body"]').should("not.be.visible");
    // Clicking the card should expand it
    cy.get('[data-testid="pregnancy-card"]').click();
    cy.wait(1000);
    // The body should now be visible
    cy.get('[data-testid="pregnancy-body"]').should("be.visible");
  });

  it("shows 'See more...' when the card is not expanded", () => {
    // When the card is not expanded, "See more..." should be visible
    cy.get('[data-testid="see-more"]').should("be.visible");
  });

  it("collapses the card to hide body text when clicked again", () => {
    // Clicking the card once should expand it
    cy.get('[data-testid="pregnancy-card"]').click();
    cy.wait(1000);
    // Clicking the card again should collapse it
    cy.get('[data-testid="pregnancy-card"]').click();
    cy.wait(1000);
    // The body should now be hidden again
    cy.get('[data-testid="pregnancy-body"]').should("not.be.visible");
  });

  it("renders the image with correct dimensions", () => {
    // Check the image's width and height
    cy.get('[data-testid="pregnancy-image"]')
      .should("have.css", "max-width", "130px")
      .should("have.css", "max-height", "130px");
  });
});
