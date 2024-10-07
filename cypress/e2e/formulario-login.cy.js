describe('Formulario de Login', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/')
    })

    it('Não deve permitir um email invalido', ()=> {
        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('tonystark@email')
        cy.getByData('senha-input').type('852456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })
    it('Não deve permitir um campo em branco', ()=> {
        cy.getByData('botao-login').click()
        cy.getByData('senha-input').type('852456')
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')

    })

})