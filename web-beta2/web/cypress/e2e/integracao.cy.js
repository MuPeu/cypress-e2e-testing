describe('template spec', () => {
  it('Teste da página de Integração', () => {
    cy.viewport(1440, 900)
    cy.login('4dt@gmail.com', '4DT')

    cy.contains('h4', 'Integração').click()

    cy.get('#cep').type('04757000').should('have.value', '04757-000')

    cy.contains('button', 'Buscar').click()

    cy.get('#street').should('have.value', 'Rua Bento Branco de Andrade Filho')
    cy.get('#neighborhood').should('have.value', 'Jardim Dom Bosco')
    cy.get('#city').should('have.value', 'São Paulo')
    cy.get('#state').should('have.value', 'SP')
  })
})