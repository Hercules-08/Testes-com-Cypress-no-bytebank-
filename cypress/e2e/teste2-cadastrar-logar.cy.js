describe('Cadastrar e logar', ()=> {
    it('Cadastrando o usuario', ()=> {
        cy.visit('http://localhost:3000/')
        
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('Peter Parker')
        cy.getByData('email-input').type('spiderman@email.com')
        cy.getByData('senha-input').type('123456789')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/');

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('spiderman@email.com')
        cy.getByData('senha-input').type('123456789')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home')


    })
})