/**
 * - Login spec
 *   - should display login page correctly
 *   - should display error when email is empty
 *   - should display error when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should display login page correctly', () => {
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').contains(/login/i).should('be.visible');
  });

  it('should display error when email is empty', () => {
    cy.get('input[name="password"]').type('somepassword');
    cy.get('button[type="submit"]').click();

    cy.contains(/email is required/i).should('be.visible');
  });

  it('should display error when password is empty', () => {
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('button[type="submit"]').click();

    cy.contains(/password is required/i).should('be.visible');
  });

  it('should display alert when username and password are wrong', () => {
    cy.intercept('POST', 'https://forum-api.dicoding.dev/v1/login', {
      statusCode: 401,
      body: {
        status: 'fail',
        message: 'invalid email or password',
        data: {},
      },
    }).as('loginFailed');

    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginFailed');

    cy.on('window:alert', (text) => {
      expect(text.toLowerCase()).to.include('invalid email or password');
    });
  });

  it('should display homepage when username and password are correct', () => {
    cy.intercept('POST', 'https://forum-api.dicoding.dev/v1/login', {
      statusCode: 200,
      body: {
        status: 'success',
        data: {
          token: 'fake_token_123',
        },
      },
    }).as('loginSuccess');

    cy.intercept('GET', 'https://forum-api.dicoding.dev/v1/users/me', {
      statusCode: 200,
      body: {
        status: 'success',
        data: {
          user: {
            id: 'user-123',
            name: 'John Doe',
            email: 'user@example.com',
          },
        },
      },
    }).as('getProfile');

    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('correctpassword');
    cy.get('button[type="submit"]').click();

    cy.wait('@loginSuccess');
    cy.wait('@getProfile');

    cy.url().should('include', '/');
    cy.contains(/category list/i, { timeout: 8000 }).should('be.visible');
  });
});
