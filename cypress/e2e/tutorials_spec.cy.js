describe('tutorials', () => {
  it('can load the list page', () => {
    cy.visit('/');
    cy.contains('Tutorial List');
  });

  it('can visit the add tutorial page', () => {
    cy.visit('/');
    cy.contains('Add')
      .click();
    cy.url()
      .should('include', 'add');
    cy.contains('Tutorial Add');
  });

  describe('add tutorial', () => {
    it('can load the add page', () => {
      cy.visit('/add');
      cy.contains('Tutorial Add');
    });

    it('does not add when fields are empty', () => {
      cy.visit('/add');
      cy.contains('Save').click();
      cy.contains('Content can not be empty!');
    });

    it('can add a tutorial', () => {
      const uniqueId = new Date().getTime();
      cy.visit('/add');
      cy.vueField('Title')
        .type('Automated Testing Tutorial ' + uniqueId);
      cy.vueField('Description')
        .type('A really cool tutorial');
      cy.contains('Save').click();

      cy.contains('Tutorial List');
      cy.contains('Automated Testing Tutorial ' + uniqueId);
    });
  });
});
