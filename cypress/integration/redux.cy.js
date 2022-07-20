/// <reference types="Cypress" />

import login from "./pages/login"
import homepage from "./pages/homepage"
import formeditor from "./pages/formeditor"
import profile from "./pages/profile"

    const names = "wilson"
    const email = "wilwilson@yopmail.com"
    const passw = "admin123"
    const title = "Test1"
    const about = "Test2"
    const markdown = "Test3"
    const tag = "Test"
    const editname = "Tatata"
    const comment = "nice work"

describe('Testing with Cypress.io', {
    viewportHeight: 1050,
    viewportWidth: 1680,
}, () => {
    it('Sign in', () => {
        cy.visit(Cypress.env('url'))
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        homepage.clickLoginMenu()
        login.typeEmailTextbox(email)
        login.typePassTextbox(passw)
        login.clickSubmitBtn()
        cy.contains('Your Feed',{timeout:3000}).should('be.visible')
    }),
    it('Create a Post', () => {
        homepage.clickNewPostMenu()
        cy.hash().should('include','editor')
        formeditor.typeTitleTextbox(title)
        formeditor.typeAboutTextbox(about)
        formeditor.typeMarkdownTextbox(markdown)
        formeditor.typeTagTextbox(tag)
        formeditor.clickPublishBtn()
        cy.wait(4000)
        cy.contains('Test',{timeout:2000}).should('be.visible')
        cy.url().should('include','article')
    }),
    it('Mark-Unmark as favorite', () => {
        homepage.clickProfileMenu()
        cy.url().should('include',names)
        cy.contains('My Articles').should('be.visible')
        profile.clickLikeBtn()
        cy.wait(2000)
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.wait(1000)
        profile.clickLikeBtn()
        cy.contains('My Articles').click()
        cy.uncaught()
        cy.contains('Favorited Articles').click()
        cy.contains('No articles').should('be.visible')
        cy.go('back')
    }),
    it('Edit a Post', () => {
        profile.clickArticleData()
        cy.url().should('include','article')
        cy.wait(2000)
        profile.clickEditBtn()
        cy.url().should('include','editor')
        cy.wait(2000)
        formeditor.elements.titleTextbox().clear()
        formeditor.typeTitleTextbox(editname)
        formeditor.typeAboutTextbox(editname)
        formeditor.typeMarkdownTextbox(editname)
        formeditor.clickPublishBtn()
        cy.contains(editname).should('be.visible')
    }),
    it('Add comment on a post', () => {
        profile.typeCommentTextbox(comment)
        profile.clickPostBtn()
        profile.elements.commentData().then((el) => {
            const teks = el.text()
            expect(teks).to.equal(comment)
        })
    }),
    it('Delete a Post', () => {
        profile.clickDeleteBtn({timeout:2000})
        cy.contains('Your Feed').should('be.visible')
        cy.wait(3000)
        profile.elements.articleBar().then((el)=> {
            const teks = el.text()
            expect(teks.includes('No articles')).to.be.true
        })
    }),
    it('Tags on Global Feed', () => {
        cy.contains('Global Feed').click()
        homepage.elements.tagBar().contains('implementations').click()
        homepage.elements.tagTab().should('be.visible')
        homepage.elements.articleData().each(($el,index,$list) => {
            const teks = $el.text()
            expect(teks.includes('implementations')).to.be.true
        })
    }),
    it('Mark Favorite on Global Feed', () => {
        homepage.elements.articleData().find('.preview-link').each(($el,index,$list) => {
            const teks = $el.text()
            if(teks.includes('Explore')) {
                cy.get('.ion-heart').eq(index).click()
            }
        })
        homepage.clickProfileMenu()
        cy.uncaught()
        cy.wait(2000)
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        profile.elements.articleData().each(($el,index,$list) => {
            const teks = $el.text()
            expect(teks.includes('implementation')).to.be.true
        })
        profile.clickLikeBtn()
    }),
    it('Edit Description on Profile', () => {
        homepage.clickSettingsMenu()
        cy.url().should('include','settings')
        cy.hash().should('include','settings')
        profile.typeBioTextbox(editname)
        profile.clickUpdateBtn()
        cy.wait(2000)
        homepage.clickSettingsMenu()
        profile.elements.bioTextbox().should('have.value',editname)
    }),
    it('Sign Out', () => {
        cy.url().should('include','settings')
        profile.clickSignOutBtn()
        cy.contains('Sign up').should('be.visible')
        cy.title('conduit')
    })
})