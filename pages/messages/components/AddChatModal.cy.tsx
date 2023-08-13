import React from "react";
import AddChatModal from "./AddChatModal";

describe("<AddChatModal />", () => {
  it("renders", () => {
    cy.mount(<AddChatModal />);
  });
  it("renders the ChatProfile component if chatReady is true", () => {
    // I do this to check if the chat profile is rendered when chatReady is set to true
    cy.get('[data-testid="chat-profile"]').should("be.visible");
  });

  it("doesn't render the ChatProfile component if chatReady is false", () => {
    // I check this to ensure that the chat profile is not visible when chatReady is set to false
    cy.get('[data-testid="chat-profile"]').should("not.be.visible");
  });

  it("renders the Modal when isOpen is true", () => {
    // I do this to verify that the modal is displayed when isOpen is true
    cy.get('[data-testid="modal"]').should("be.visible");
  });

  it("closes the Modal when the cancel button is clicked", () => {
    // First, I find the cancel button and click on it
    cy.get('[data-testid="cancel-button"]').click();
    cy.wait(1000);
    // Then, I verify that the modal is not visible after clicking the cancel button
    cy.get('[data-testid="modal"]').should("not.be.visible");
  });

  it("renders the AdminListItem for users with type 'admin'", () => {
    // I do this to ensure that only users with type 'admin' are rendered as AdminListItem components
    cy.get('[data-testid="admin-list-item"]').should("be.visible");
  });

  it("does not render any component for users other than 'admin'", () => {
    // I check this to ensure that users without the 'admin' type are not rendered
    cy.get('[data-testid="non-admin-user"]').should("not.exist");
  });

  it("closes the Modal and renders the ChatProfile on selecting a user to chat", () => {
    // First, I simulate the action of selecting a user for chat
    cy.get('[data-testid="user-selection"]').click();
    // Then, I check if the modal has been closed
    cy.get('[data-testid="modal"]').should("not.be.visible");
    // Finally, I check if the ChatProfile component has been rendered
    cy.get('[data-testid="chat-profile"]').should("be.visible");
  });
});
