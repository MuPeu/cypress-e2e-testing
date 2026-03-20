describe('template spec', () => {
  it('Logar com Sucesso', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()
  })

  it('Campo em Branco', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.contains('button', 'Entrar').click()

    cy.contains('Ei, não esqueça de digitar seu email!')
    cy.contains('Você precisa de uma senha para entrar!')
  })

  it('Email Incorreta', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail')
    cy.get('#password').type('1234')

    cy.contains('button', 'Entrar').click()

    cy.contains('Hmm... esse email parece estar errado')
  })

  it('Senha Incorreta', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('1234')

    cy.contains('button', 'Entrar').click()

    cy.contains('Acesso negado! Tente novamente.')
  })
})