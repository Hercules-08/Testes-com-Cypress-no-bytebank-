describe('Dados preenchidos incorretamente', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })
    it('Preenchendo dados errados', ()=> {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input')
        cy.getByData('email-input').type('tonystark@email.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo de nome é obrigatório')
    
    })
})