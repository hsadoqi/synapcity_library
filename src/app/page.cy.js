import Home from './page'

describe('<Home />', () => {
    it('should render and display expected content', () => {
        cy.mount(<Home />)
        cy.get('h1').contains('Welcome')
    })
})
