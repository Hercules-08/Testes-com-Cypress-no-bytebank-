describe('formulario de Cadastro', ()=> {
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('O usuario deve se cadastrar com sucesso', ()=> {
        cy.getByData('botao-cadastro').click()
        cy.getByData('nome-input').type('rengoku')
        cy.getByData('email-input').type('hashiradaschamas@email.com')
        cy.getByData('senha-input').type('123456')
        cy.getByData('checkbox-input').click()
        cy.getByData('botao-enviar').click()
        cy.getByData('mensagem-sucesso').should('exist').and('have.text', 'Usuário cadastrado com sucesso!')
    })
})