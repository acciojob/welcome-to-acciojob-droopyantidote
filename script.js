//your JS code here. If required.
cy.visit(baseUrl + "/main.html");
cy.get('h1').invoke('text').then((text) => {
    const cleanedText = text.replace(/[\n\t]/g, ''); // Remove newline and tab characters
    expect(cleanedText).to.equal('Welcome to Accio Jobs!');
});