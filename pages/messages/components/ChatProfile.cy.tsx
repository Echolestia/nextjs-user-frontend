import React from "react";
import ChatProfile from "./ChatProfile";

describe("<ChatProfile />", () => {
  it("renders the back button container", () => {
    cy.get('[data-testid="back-button-container"]').should("be.visible");
    // I check for the visibility of the back button container to ensure that the user can navigate back
  });

  it("handles the back button click event", () => {
    cy.get('[data-testid="back-button"]').click();
    // I trigger a click event on the back button and expect some functionality to be executed, such as navigating to the previous page
  });

  it("renders the user icon", () => {
    cy.get('[data-testid="user-icon"]').should("be.visible");
    // I verify that the user icon is displayed, indicating that the user profile is the focus of this view
  });

  it("displays the user's name and bio", () => {
    cy.get('[data-testid="user-name"]').should("contain", "John Doe");
    cy.get('[data-testid="user-bio"]').should("contain", "Software Engineer");
    // I check the user's name and bio, ensuring that the correct information is being displayed on the profile
  });

  it("renders the start chat button with the correct user's name", () => {
    cy.get('[data-testid="chat-button"]').should(
      "contain",
      "Start chat with John Doe"
    );
    // I verify that the start chat button includes the user's name, ensuring that the user knows who they will be chatting with
  });

  it("handles the chat button click event", () => {
    cy.get('[data-testid="chat-button"]').click();
    // I trigger a click event on the chat button, expecting that the chat interface with the specific user will be initiated
  });
});
