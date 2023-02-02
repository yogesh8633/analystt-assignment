import React from 'react'
import Users from './index';
import { mount } from 'cypress/react'
import "../../app.scss";
/* Testing the component. */
describe('Users Component', () => {
  it('renders', () => {
    mount(<Users />);
    cy.get('[data-cy="view-details"]').first().click();
    cy.get('[data-cy="view-details"]').first().click();
    cy.scrollTo('bottom');
    cy.get('.next-item > .page-link').click();
    cy.get('.prev-item').click();
  })
})