class formeditor {

    elements = {
        titleTextbox: () => cy.get('input[placeholder="Article Title"]'),
        aboutTextbox: () => cy.get('input[placeholder="What\'s this article about?"]'),
        markdownTextbox: () => cy.get('textarea.form-control'),
        tagTextbox: () => cy.get('input[placeholder="Enter tags"]'),
        publishBtn: () => cy.get('button'),
    }

    typeTitleTextbox(a) {
        this.elements.titleTextbox().type(a)
    }

    typeAboutTextbox(a) {
        this.elements.aboutTextbox().type(a)
    }

    typeMarkdownTextbox(a) {
        this.elements.markdownTextbox().type(a)
    }

    typeTagTextbox(a) {
        this.elements.tagTextbox().type(a)
    }

    clickPublishBtn() {
        this.elements.publishBtn().click()
    }
}

module.exports = new formeditor();