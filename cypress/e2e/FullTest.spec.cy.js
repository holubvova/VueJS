describe('The login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  
  it('Register check', () => {
    cy.get('p.text-center').contains('Sing Up').click(); 
    cy.url().should('include', '/registration');
    });

  it('Register user', () => {
    cy.get('p.text-center').contains('Sing Up').click(); 
    cy.url().should('include', '/registration');
    cy.get('input#username').type('JohnDoe');
    cy.get('input#email').type('johndoe@example.com');
    cy.get('input#password').type('password');
    cy.get('input#confirmPassword').type('password');
    cy.get('select#sex').select('Man');
    cy.get('[data-cy=birthday-input]').type('2023-06-03');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/login');
    });

  // it('this case crash. Reason i don`t  konow',()=>{
  //   cy.get('[data-cy=email-input]').type('johndoe@example.com');
  //   cy.get('[data-cy=password-input]').type('password');
  //   cy.get('[data-cy=submit-button]').click();
  //   // this case crashed
  // });

  it('this case crash. Reason i don`t  konow',()=>{
    cy.get('[data-cy=email-input]').type('admin@admin.com');
    cy.get('[data-cy=password-input]').type('admin');
    cy.get('[data-cy=submit-button]').click();
    // this case crashed 
  });

  

  //   it('Profile', () => {
  //
  //
  //     const user = {
  //       username: 'admin',
  //       email: 'admin@admin.com',
  //       birthday: '1999-01-01',
  //       sex: 1
  //     }
  //
  //   cy.contains('Profile').click()
  //
  //   cy.contains('Profile').click()
  //
  //   cy.get('table')
  //     .contains('Name')
  //     .siblings('td')
  //     .should('contain', user.username)
  //   cy.get('table')
  //     .contains('Email')
  //     .siblings('td')
  //     .should('contain', user.email)
  //   cy.get('table')
  //     .contains('Birthday')
  //     .siblings('td')
  //     .should('contain', user.birthday)
  //   cy.get('table')
  //     .contains('Sex')
  //     .siblings('td')
  //     .should('contain', 'Man')
  //
  //   cy.get('a.btn-secondary').should('contain', 'Edit')
  //   cy.get('a.btn-secondary').should('have.attr', 'href', 'editprofile')
  // })
  //

  

})