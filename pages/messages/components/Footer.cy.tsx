import React from "react";
import Footer from "./Footer";

describe("Footer Component Tests", () => {
  // Ensure the input box is rendered
  it("renders the input box for messages", () => {
    cy.get('[data-testid="message-input"]').should("be.visible");
  });

  // Test input interaction and its behavior
  it("allows text to be entered into the message input", () => {
    const testMessage = "Hello, Chat!";
    cy.get('[data-testid="message-input"]')
      .type(testMessage)
      .should("have.value", testMessage);
  });

  // Test if the button is disabled when inputMessage is empty or just whitespace
  it("disables the send button when message input is empty or just whitespace", () => {
    // Test with empty input
    cy.get('[data-testid="message-input"]').clear();
    cy.get('[data-testid="send-button"]').should("be.disabled");

    // Test with whitespace only
    cy.get('[data-testid="message-input"]').type("   ");
    cy.get('[data-testid="send-button"]').should("be.disabled");
  });

  // Check for the Enter key functionality
  it("sends a message when Enter is pressed with a non-empty message", () => {
    const testMessage = "Hello, World!";
    cy.get('[data-testid="message-input"]').type(testMessage);
    cy.get('[data-testid="message-input"]').type("{enter}"); // simulates Enter key press
  });

  // Testing for the button click functionality
  it("sends a message when the send button is clicked", () => {
    const testMessage = "Hello again!";
    cy.get('[data-testid="message-input"]').type(testMessage);
    cy.get('[data-testid="send-button"]').click();
  });

  // Testing for hover behavior on the send button
  it("changes the send button's appearance on hover", () => {
    cy.get('[data-testid="send-button"]').trigger("mouseover");

    cy.get('[data-testid="send-button"]').should(
      "have.css",
      "background-color",
      "white"
    );
    cy.get('[data-testid="send-button"]').should("have.css", "color", "black");
    cy.get('[data-testid="send-button"]').should(
      "have.css",
      "border",
      "1px solid black"
    );
  });
});
