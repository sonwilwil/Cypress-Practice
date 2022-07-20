class profile {

    elements = {
        likeBtn: () => cy.get('.ion-heart'),
        articleData: () => cy.get('.preview-link'),
        editBtn: () => cy.get('.ion-edit'),
        commentTextbox: () => cy.get('.card-block'),
        postBtn: () => cy.get('button').contains('Post'),
        commentData: () => cy.get('.card-text'),
        deleteBtn: () => cy.get('.btn-outline-danger'),
        bioTextbox: () => cy.get('textarea[placeholder="Short bio about you"]'),
        updateBtn: () => cy.get('button[type="submit"]'),
        signoutBtn: () => cy.get('.btn-outline-danger'),
        articleBar: () => cy.get('.article-preview'),
    }

    clickLikeBtn() {
        this.elements.likeBtn().eq(0).click()
    }

    clickArticleData() {
        this.elements.articleData().click()
    }

    clickEditBtn() {
        this.elements.editBtn().click()
    }

    typeCommentTextbox(a) {
        this.elements.commentTextbox().type(a)
    }

    clickPostBtn() {
        this.elements.postBtn().click()
    }

    clickDeleteBtn() {
        this.elements.deleteBtn().click()
    }

    typeBioTextbox(a) {
        this.elements.bioTextbox().clear().type(a)
    }

    clickUpdateBtn() {
        this.elements.updateBtn().click()
    }

    clickSignOutBtn() {
        this.elements.signoutBtn().click()
    }
}
module.exports = new profile()