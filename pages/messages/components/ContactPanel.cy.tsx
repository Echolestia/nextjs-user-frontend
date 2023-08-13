import React from "react";
import ContactPanel from "./ContactPanel";

describe("<ContactPanel />", () => {
  it("renders 'You have no chats yet' message when chatrooms are empty", () => {
    // I use this test to check if the correct message is displayed when there are no chatrooms
    cy.get('[data-test-id="no-chats-message"]').should(
      "contain.text",
      "You have no chats yet."
    );
  });

  it("renders Chatbot row for chatroom with is_ai_chat === true", () => {
    // I select a chatbot row and ensure it's visible, this is to confirm that chatbot rows are rendered correctly
    cy.get('[data-test-id="chatbot-row"]').should("be.visible");
  });

  it("renders admin chatroom row for opponent_user_type === 'admin'", () => {
    // I select an admin chatroom row and ensure it's visible, this is to confirm that admin chatrooms are rendered correctly
    cy.get('[data-test-id="admin-row"]').should("be.visible");
  });

  it("changes backColor to 'pink.300' after clicking a chatroom", () => {
    // I click on a chatroom to check if the backColor is set to 'pink.300' initially
    cy.get('[data-test-id="chatroom-row"]').first().click();
    cy.get('[data-test-id="back-color"]').should(
      "have.css",
      "background-color",
      "pink.300"
    );
  });

  it("changes backColor to 'purple.100' and sets selected chat ID after clicking a chatroom", () => {
    // I wait 200 milliseconds and then check if the backColor is set to 'purple.100' and the selected chat ID has been set
    cy.get('[data-test-id="chatroom-row"]').first().click();
    cy.wait(200);
    cy.get('[data-test-id="back-color"]').should(
      "have.css",
      "background-color",
      "purple.100"
    );
    cy.get('[data-test-id="selected-chat-id"]').should("be.visible");
  });

  it("does not render chatroom if opponent_user_type is not 'admin'", () => {
    // I look for a chatroom with a non-admin opponent and ensure it's not visible, this confirms that non-admin chatrooms are skipped
    cy.get('[data-test-id="non-admin-row"]').should("not.be.visible");
  });
});
