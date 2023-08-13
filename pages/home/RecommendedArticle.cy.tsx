import React from "react";
import RecommendedArticle from "./RecommendedArticle";

describe("<RecommendedArticle />", () => {
  it("should render the recommended article card when article data is provided", () => {
    // I'm checking the visibility of the card containing the recommended article
    cy.get('[data-testid="recommended-article-card"]').should("be.visible");
  });

  it("should not render the recommended article card when no article data is provided", () => {
    // Here, I'm checking that the card is not rendered when no article is passed to the component
    cy.get('[data-testid="recommended-article-card"]').should("not.exist");
  });

  it("should display the correct image for the article", () => {
    // I'm checking that the image element has the correct src attribute for the article's image
    cy.get('[data-testid="article-image"]').should(
      "have.attr",
      "src",
      "expected-image-url"
    );
  });

  it("should display the correct article title", () => {
    // I'm checking the correct title for the recommended article
    cy.get('[data-testid="article-title"]').should("contain", "Expected Title");
  });

  it("should display the correct article author", () => {
    // I'm checking the correct author name for the recommended article
    cy.get('[data-testid="article-author"]').should(
      "contain",
      "Expected Author"
    );
  });

  it("should display the correct article published date", () => {
    // I'm checking the correct published date for the recommended article
    cy.get('[data-testid="article-published-date"]').should(
      "contain",
      "Expected Published Date"
    );
  });

  it("should trigger the onArticleClick function when the card is clicked", () => {
    // I'm simulating a click event on the card and expecting that the onArticleClick function is called with the correct URL
    cy.get('[data-testid="recommended-article-card"]').click();
    cy.get('[data-testid="article-click-result"]').should(
      "contain",
      "Expected URL"
    );
  });
});
