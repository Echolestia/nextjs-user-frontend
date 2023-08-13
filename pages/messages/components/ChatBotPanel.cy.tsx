import React from "react";
import ChatBotPanel from "./ChatBotPanel";

describe("<ChatBotPanel />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChatBotPanel />);
  });
  it("renders the Header component with a back button", () => {
    // I use the 'data-testid' attribute to select the Header component's back button
    cy.get('[data-testid="back-button"]').should("be.visible");
  });

  it("triggers the back button action when clicked", () => {
    // I wait for a while to make sure everything is loaded
    cy.wait(500);
    // I find the back button by its test ID and click on it
    cy.get('[data-testid="back-button"]').click();
    cy.get('[data-testid="previous-screen"]').should("be.visible");
  });

  it("renders the Messages component with chatbot messages", () => {
    // I look for the Messages component by a class name you should assign to it
    cy.get(".messages-container").should("be.visible");
    // I check for the loading spinner, assuming it's implemented and visible while chatbot messages are loading
    cy.get(".loading-spinner").should("be.visible");
    // I use a timed wait here to simulate waiting for the chatbot messages to load
    cy.wait(2000);
    // I check that the chatbot messages are visible after the loading spinner has gone
    cy.get('[data-testid="chatbot-messages"]').should("be.visible");
  });

  it("renders the Footer component with the input field and send button", () => {
    // I look for the input field in the Footer component using the 'data-testid' attribute
    cy.get('[data-testid="input-message-field"]').should("be.visible");
    // I do this because the send button should also be there in the Footer component
    cy.get('[data-testid="send-message-button"]').should("be.visible");
  });

  it("sends a message when the send button is clicked", () => {
    // I type a test message into the input field
    cy.get('[data-testid="input-message-field"]').type("Test message");
    // I click the send button to send the message
    cy.get('[data-testid="send-message-button"]').click();
    // I do this because I want to verify that the message appears in the Messages component
    cy.get('[data-testid="message-Test message"]').should("be.visible");
  });
});
