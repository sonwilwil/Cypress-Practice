class login {

    elements = {
        emailTextbox: () => cy.get('input[type="email"]'),
        passTextbox: () => cy.get('input[type="password"]'),
        submitBtn: () => cy.get('button[type="submit"]')
    }

    typeEmailTextbox(a) {
        this.elements.emailTextbox().type(a)
    }

    typePassTextbox(a) {
        this.elements.passTextbox().type(a)
    }

    clickSubmitBtn() {
        this.elements.submitBtn().click()
    }
}
module.exports = new login()