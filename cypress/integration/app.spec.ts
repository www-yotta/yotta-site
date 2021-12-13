describe("Navigation", () => {
  // このファイルのすべてのテストの前に実行される
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("ページの内部ナビゲーション", () => {
    cy.getBySel("ProfileMenu").click();
    cy.url().should("include", "#profile");

    cy.getBySel("YoutubeMenu").click();
    cy.url().should("include", "#youtube");

    cy.getBySel("WorkMenu").click();
    cy.url().should("include", "#work");

    cy.getBySel("BlogMenu").click();
    cy.url().should("include", "#blog");

    cy.getBySel("ContactMenu").click();
    cy.url().should("include", "#contact");
  });
});
