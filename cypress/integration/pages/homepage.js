class homepage {

    elements = {
        loginMenu: () => cy.get('a[href="#login"]'),
        newpostMenu: () => cy.get('.container > .nav > :nth-child(2) > .nav-link'),
        profileMenu: () => cy.get(':nth-child(4) > .nav-link'),
        tagBar: () => cy.get('.sidebar'),
        tagTab: () => cy.get('.ion-pound'),
        articleData: () => cy.get('.article-preview'),
        settingsMenu: () => cy.get(':nth-child(3) > .nav-link').contains('Settings'),
    }

    clickLoginMenu() {
        this.elements.loginMenu().click()
    }

    clickNewPostMenu() {
        this.elements.newpostMenu().click()
    }
    
    clickProfileMenu() {
        this.elements.profileMenu().click()
    }

    clickSettingsMenu() {
        this.elements.settingsMenu().click()
    }
}
module.exports = new homepage();