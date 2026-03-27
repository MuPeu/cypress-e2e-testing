describe('template spec', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()

    cy.contains('h4', 'Formulários').click()

    cy.get('#name').type('Murilo França')

    cy.get('#email').type('4dt@gmail.com')

    cy.get('#phone').type('11942898989').should('have.value', '(11) 94289-8989')

    cy.get('#consultancyType').select('In Company')

    cy.contains('span', 'Pessoa Jurídica').click()

    cy.contains('label', 'Pessoa Física').find('input').should('be.not.checked')

    cy.contains('span', 'Pessoa Física').click()

    cy.contains('label', 'Pessoa Jurídica').find('input').should('be.not.checked')

    cy.get('#document').type('20495991023').should('have.value', '204.959.910-23')

    const redes = ['Instagram', 'LinkedIn', 'Udemy', 'YouTube', 'Indicação de Amigo']
    redes.forEach((rede) => {
      cy.contains('label', rede).find('input').check().should('be.checked')
    })

    cy.get('input[type="file"]').selectFile('./cypress/fixtures/img-test.jpg', { force: true })

    cy.get('#details').type('Gostaria de saber mais sobre os cursos oferecidos pela 4DT, especialmente sobre o curso de desenvolvimento web. Estou interessado em aprimorar minhas habilidades e gostaria de obter informações detalhadas sobre o conteúdo do curso, duração, horários e valores. Além disso, gostaria de saber se há algum desconto ou promoção disponível para novos alunos. Agradeço desde já pela atenção e aguardo ansiosamente por uma resposta.')

    const tecnologias = ['javascript', 'react', 'java', 'python', 'c#', 'php']
    tecnologias.forEach((tecnologia) => {
      cy.get('#technologies').type(`${tecnologia} {enter}`)
    })

    cy.contains('label', 'Li e aceito os termos de uso *').find('input').check().should('be.checked')

    cy.contains('button', 'Enviar formulário').click()

    cy.contains('Sucesso!')
    cy.contains('Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
  })
})