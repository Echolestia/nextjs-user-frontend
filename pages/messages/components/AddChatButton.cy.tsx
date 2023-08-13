import React from "react";
import AddChatButton from "./AddChatButton";
describe("AddChatButton component", () => {
  // Test if the button is visible on the page
  it("renders the AddChatButton", () => {
    cy.get('[data-testid="add-chat-button"]').should("be.visible");
  });

  // Test if the button has the proper icon
  it("renders the plus icon", () => {
    // Find the plus icon using the SVG path
    cy.get('svg[data-icon="plus"]').should("be.visible");
  });

  // Test if the button has the expected position and styling
  it("has the correct positioning and styling", () => {
    cy.get('[data-testid="add-chat-button"]')
      .should("have.css", "position", "fixed")
      .and("have.css", "bottom", "6em")
      .and("have.css", "right", "2em")
      .and("have.css", "background-color", "brand.primary")
      .and("have.css", "color", "white")
      .and("have.css", "size", "lg");
  });

  // Test if the button click triggers the onClick event
  it("triggers onClick when clicked", () => {
    // Simulate a click on the button
    cy.get('[data-testid="add-chat-button"]').click();

    // Assuming that the onClick prop does something observable, such as opening a chat window
    // Check that the chat window is visible after the click
    cy.get(".chat-window").should("be.visible");
  });

  // Test if the button is round
  it("has the round shape", () => {
    // Check that the button has appropriate styling for a round shape
    cy.get('[data-testid="add-chat-button"]').should(
      "have.css",
      "border-radius",
      "50%"
    );
  });
});
