describe('Jornadas de usuário',()=> {
    it('Usuário deve conseguir acessar a aplicação, realizar transações e fazer logout', ()=> {
        cy.visit('http://localhost:3000/')

        cy.getByData('botao-login').click()
        cy.getByData('email-input').type('tonystark@email.com')
        cy.getByData('senha-input').type('852456')
        cy.getByData('botao-enviar').click()

        cy.location('pathname').should('eq', '/home');

        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80');
        
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/');
    });
});