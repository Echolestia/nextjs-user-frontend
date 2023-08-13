import React from "react";
import Messages from "./Messages";

describe("Messages Component Tests", () => {
  it("renders messages list when messages are provided", () => {
    // I do this because I want to ensure that the messages are being rendered when they are provided as props
    cy.get('[data-testid="message-list"]').should("be.visible");
  });

  it("scrolls to the bottom on initial load when messages are present", () => {
    // I do this because the code indicates that on the initial load, the messages list should scroll to the bottom
    // This can be checked by examining the scrolling behavior or looking at the scroll position
    cy.wait(1000);
    cy.get('[data-testid="messages-end-ref"]').should("be.inViewport");
  });

  it("displays ChatBotLoadingMessage when isLoadingChatBotMessages is true", () => {
    // I do this because the component should display a loading message for chatbot messages when isLoadingChatBotMessages prop is true
    cy.get('[data-testid="chatbot-loading-message"]').should("be.visible");
  });

  it("renders chat list item with correct content and timestamp", () => {
    // I do this because I want to ensure that the message contents and timestamps are correctly rendered in the list
    cy.get('[data-testid="chat-list-item"]').should(
      "contain.text",
      "expected content"
    );
    cy.get('[data-testid="chat-list-item-timestamp"]').should(
      "contain.text",
      "expected timestamp"
    );
  });

  it("does not scroll to bottom if user is not near bottom after initial load", () => {
    // I do this because the code indicates that the scrolling to the bottom should only occur if the user is near the bottom of the chat
    cy.get('[data-testid="user-not-near-bottom"]').should("not.be.inViewport");
  });

  it("renders opponent user image if opponent user is provided", () => {
    // I do this because I want to verify that the opponent user's image is displayed if the opponentUser prop is provided
    cy.get('[data-testid="opponent-user-img"]').should(
      "have.attr",
      "src",
      "expected-image-url"
    );
  });

  it("does not crash when no messages are provided", () => {
    // I do this to test the edge case where no messages are provided; the component should handle this gracefully without crashing
    cy.get('[data-testid="no-messages"]').should("be.visible");
  });

  it("correctly identifies if the message is not sent by myself", () => {
    // I do this because I want to check the logic that identifies if the message is sent by myself or not, based on the sender_id and userId
    cy.get('[data-testid="isNotMyself"]').should("be.visible");
  });
});
