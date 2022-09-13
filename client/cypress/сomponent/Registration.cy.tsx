import { Registration } from '../../src/pages/registration';

describe('Регистрация', () => {
  beforeEach(() => cy.mount(<Registration />));

  it('Кнопка регистрации заблокирована если не приняты соглашение', () => {
    cy.get('[data-test-id="registration_btn"]').should('be.disabled');
  });
  it('Кнопка регистрации активна если приняты соглашение', () => {
    cy.get('[data-test-id="registration_agreement"]').click();
    cy.get('[data-test-id="registration_btn"]').should('not.be.disabled');
  });

  it('Выводятся ошибки если не запонены поля', () => {
    cy.get('[data-test-id="registration_agreement"]').click();
    cy.get('[data-test-id="registration_btn"]').click();
    cy.contains('email required').should('exist');
  });
});
