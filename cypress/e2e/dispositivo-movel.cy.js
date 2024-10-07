describe('Testando dispositivos móveis', ()=> {
    it('Deve existir um botão menu burguer', ()=> {
        cy.visit('http://localhost:3000/')
        cy.viewport(375, 667)

        cy.getByData('botao-login').click();
        cy.getByData('email-input').type('tonystark@email.com');
        cy.getByData('senha-input').type('852456');
        cy.getByData('botao-enviar').click();

        cy.location('pathname').should('eq', '/home')

        cy.getByData('menu-burguer').click();
        cy.getByData('menu-lateral').find('a').eq(3).click();

        cy.location('pathname').should('eq', '/home/investimentos');
    })
})