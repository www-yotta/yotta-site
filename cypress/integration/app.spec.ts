describe("Navigation", () => {
  // このファイルのすべてのテストの前に実行されるやつ
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("should navigate to the work list page", () => {
    cy.getBySel("YouTubeItem").first().click();

    // cy.get('a[href*="/work/page/1"]').click();
    // cy.url().should("include", "/work/page/1");
    // cy.get("h1").contains("お仕事ポートフォリオ");
  });
});
