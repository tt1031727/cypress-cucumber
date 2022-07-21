import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
import signUpPage from '../../pages/signUp.page'

beforeEach(() => {
    cy.visit('https://telnyx.com/sign-up')
})

Then('click close button', () => {
    cy.get('[class*="UR"]').click()
})

When('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Test123test@" in the "password" field', ()  => {
        signUpPage.passField().type('Test123test@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})

})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint email "This field is required." appeared', () => {
    signUpPage.emError().contains('This field is required.')
})




When('Enter "test1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@gmail.com')
})

And('Enter "Test123test@" in the "password" field', ()  => {
    signUpPage.passField().type('Test123test@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint full name "This field is required." appeared', () => {
    signUpPage.fullnameError().contains('This field is required.')
})





When('Enter "test1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('Test Test')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.passField().type('Test123test@')
})

And('Enter "Test1test@" in the "password" field', ()  => {
    signUpPage.passField().type('Test1test@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('Element long class - sc-3f0fa74c-5 dlOEFS', () => {
    signUpPage.passReqLong().should('have.class','sc-3f0fa74c-5 dlOEFS')
})






When('Enter "test1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('Element numbers class - sc-3f0fa74c-5 dlOEFS', () => {
    signUpPage.passReqNumbers().should('have.class','sc-3f0fa74c-5 dlOEFS')
})



When('Enter "test1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('Element special symbols class - sc-3f0fa74c-5 dlOEFS', () => {
    signUpPage.passReqSymbols().should('have.class','sc-3f0fa74c-5 dlOEFS')
})





When('Enter "test1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('testtesttest1@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('Element upper-case class - sc-3f0fa74c-5 dlOEFS', () => {
    signUpPage.passReqUpper().should('have.class','sc-3f0fa74c-5 dlOEFS')
})






When('Enter "test1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1@')
})
        
And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('"The Please accept the terms and conditions." appeared.', () => {
    signUpPage.agreeHint().contains('Please accept the terms and conditions')
})






When('Enter "test 1234@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('te st     12  34@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint "Please enter a valid email address" appeared', () => {
    signUpPage.emError().contains('Please enter a valid email address')
})






When('Enter "test1234@@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint "Please enter a valid email address" appeared', () => {
    signUpPage.emError().contains('Please enter a valid email address')
})








When('Enter "test1234gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint "Please enter a valid email address" appeared', () => {
    signUpPage.emError().contains('Please enter a valid email address')
})




When('Enter "test1234@gmailcom" in the "email" field', ()  => {
    signUpPage.emField().type('test1234@gmailcom')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint "Please enter a valid email address" appeared', () => {
    signUpPage.emError().contains('Please enter a valid email address')
})






When('Enter "test1234.@gmail.com" in the "email" field', ()  => {
    signUpPage.emField().type('test1234.@gmail.com')
})

And('Enter "Test Test" in the "Full name" field', ()  => {
    signUpPage.fullNameField().type('Test Test')
})

And('Enter "Testtesttest1@" in the "password" field', ()  => {
    signUpPage.passField().type('Testtesttest1@')
})
        
And('Click checkbox "i agree"', ()  => {
signUpPage.checkBoxAgree().click({force: true})
})

And('Click "Create Account" button', ()  => {
    signUpPage.CreateAccBtn().click()
})

Then('The hint "Please enter a valid email address" appeared', () => {
    signUpPage.emError().contains('Please enter a valid email address')
})




Then('"Have a promo?" button is enebled', () => {
    signUpPage.haveAPromoBtn().should('not.be.disabled')
})


Then('"sign up with google" button is enebled', () => {
    signUpPage.withGoogleBtn().should('not.be.disabled')
})

Then('"sign up with microsoft" button is enebled', () => {
    signUpPage.withMicrosoftBtn().should('not.be.disabled')
})

When('click "telnyx" logo', ()  => {
    signUpPage.telnyxLogo().click()
})

And('wait', ()  => {
    cy.wait(2000)
})

Then('open main page', () => {
    cy.url().should('contains','https://telnyx.com/')
})




When('click "sign in" button', ()  => {
    signUpPage.telnyxLogo().click()
})

And('wait', ()  => {
    cy.wait(2000)
})

Then('open sign in page', () => {
    cy.url().should('contains','https://portal.telnyx.com/?_gl=1*1szmezg*_ga*MTA3OTkxMzIwOS4xNjU3NTI2OTEx*_ga_ZPM4K1DLND*MTY1ODM0NjYwMi4yMy4xLjE2NTgzNDc3MTIuMA..#/login/sign-in')
})



When('click "Terms and Conditions" button', ()  => {
    signUpPage.termsBtn().click()
})

And('wait', ()  => {
    cy.wait(2000)
})

Then('open Terms and Conditions page', () => {
    cy.url().should('contains','https://telnyx.com/terms-and-conditions-of-service')
})



When('click "JOIN THE WAITLIST." button', ()  => {
    signUpPage.waitListBtn().click()
})

And('wait', ()  => {
    cy.wait(2000)
})

Then('open product page', () => {
    cy.url().should('contains','https://telnyx.com/products/storage')
})





When('click "Privacy Policy" button', ()  => {
    signUpPage.privacyPolicyBnt().click()
})

And('wait', ()  => {
    cy.wait(2000)
})

Then('open Privacy Policy page', () => {
    cy.url().should('contains','https://telnyx.com/privacy-policy')
})