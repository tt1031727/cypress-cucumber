
class SignUpPage{

    emField() {
        return cy.get('[id="email"]')
    }
    passField() {
        return cy.get('[id="password"]')
    }
    fullNameField() {
        return cy.get('[id="full_name"]')
    }
    checkBoxAgree() {
        return cy.get('[id="terms_and_conditions"]')
    }
    CreateAccBtn() {
        return cy.get('[class*="Q "]')
    }
    emError() {
        return cy.get('[id="email_error"]')
    }
    fullnameError() {
        return cy.get('[id="full_name_error"]')
    }
    passReqLong() {
        return cy.xpath('//div[contains(text(), "12 cha")]')  
    }
    passReqNumbers() {
        return cy.xpath('//div[contains(text(), "num")]')   
    }
    passReqSymbols() {
        return cy.xpath('//div[contains(text(), "symb")]')   
    }
    passReqUpper() {
        return cy.xpath('//div[contains(text(), "up")]')   
    }
    agreeHint() {
        return cy.xpath('//span[contains(text(), "Plea")]')   
    }
    haveAPromoBtn() {
        return cy.get('[class="sc-5d3a275a-24 sc-5d3a275a-25 iXlaXw giQHLy"]')   
    }
    withGoogleBtn() {
        return cy.get('[data-e2e="google"]')   
    }
    withMicrosoftBtn() {
        return cy.get('[data-e2e="SocialAuthButton--microsoft_graph"]')   
    }
    telnyxLogo() {
        return cy.get('[id="Logo-Dark_svg__Layer_1"]')   
    }
    signInBtn() {
        return cy.get('[href*="https://portal.telnyx.com/?"]')   
    }
    termsBtn() {
        return cy.get('[href="/terms-and-conditions-of-service"]')   
    }
    waitListBtn() {
        return cy.get('[class*="sc-f97529d6-0 bjUuRN sc-897a80"]')   
    }
    privacyPolicyBnt() {
        return cy.get('[href="/privacy-policy"]')   
    }
    
}

module.exports = new SignUpPage();