describe('template spec', () => {
  it('Teste de preenchimento da Tabela', () => {
    cy.viewport(1440, 900)
    cy.login('4dt@gmail.com', '4DT')

    cy.contains('h4', 'Tabela').click()

    cy.get('#name').type('Murilo França')

    cy.get('#username').type('MuPeu')

    cy.get('#profile').type('Desenvolvedor Full Stack')

    cy.contains('button', 'Adicionar Perfil').click()

    cy.get('tbody > .border-b > :nth-child(1)').should('have.text', 'Murilo França')
    cy.get('tbody > .border-b > :nth-child(2)').should('have.text', 'MuPeu')
    cy.get('tbody > .border-b > :nth-child(3)').should('have.text', 'Desenvolvedor Full Stack')

    
  })
})