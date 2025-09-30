describe('Login en Bumeran', () => {
  it('Debe loguearse correctamente', () => {
    cy.visit('https://www.bumeran.com.ar/');

    // Hacer clic en "Ingresar" esperando que sea visible
    cy.get('.sc-hwwEjo').click();
    cy.get('#ingresarNavBar').click();

    // Escribir usuario y contraseña
    cy.get('input[type="email"]').type('claribelv71@gmail.com');
    cy.get('input[type="password"]').type('daniel', { log: false });

    // Clic en el botón de login
    cy.contains('button', /Ingresar|Login|Iniciar sesión/i).click();

    // Validación final
    cy.url().should('not.include', '/login');
  });
  });

  describe('Login en Bumeran', () => {
 it('No debe loguearse con contraseña incorrecta', () => {
    cy.visit('https://www.bumeran.com.ar/');

    cy.get('.sc-hwwEjo').click();
    cy.get('#ingresarNavBar').click();

    cy.get('input[type="email"]').type('claribelv71@gmail.com');
    cy.get('input[type="password"]').type('123', { log: false });

    cy.contains('button', /Ingresar|Login|Iniciar sesión/i).click();

    // Validación: debería mostrar un mensaje de error o permanecer en login
    cy.url().should('include', '/login');
    cy.contains('Usuario o contraseña incorrecto').should('be.visible'); 
    // Ajusta según el mensaje real
  });
  });
  