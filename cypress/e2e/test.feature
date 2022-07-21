Feature: Sign up page

    automation tc for sign up page

    Scenario: Checking that the hint "This field is required." appears if you leave the "email" field empty.
        When Enter "Test Test" in the "Full name" field
        And Enter "Test123test@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint email "This field is required." appeared

    Scenario: Checking that the hint "This field is required." appears if you leave the "Full name" field empty.
        When Enter "test1234@gmail.com" in the "email" field
        And Enter "Test123test@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint full name "This field is required." appeared

    Scenario: Checking that it is impossible to create a password less than 12 characters.
        When Enter "test1234@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Test1test@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then Element long class - sc-3f0fa74c-5 dlOEFS

    Scenario: Checking that it is impossible to create a password without numbers
        When Enter "test1234@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then Element numbers class - sc-3f0fa74c-5 dlOEFS

    Scenario: Checking that it is impossible to create a password without special symbols
        When Enter "test1234@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then Element special symbols class - sc-3f0fa74c-5 dlOEFS

    Scenario: Checking that it is impossible to create a password without upper-case letter
        When Enter "test1234@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "testtesttest1@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then Element upper-case class - sc-3f0fa74c-5 dlOEFS

    Scenario: Checking the inability to register an account without confirming the agreement
        When Enter "test1234@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1@" in the "password" field
        And Click "Create Account" button
        Then "The Please accept the terms and conditions." appeared.
    
    Scenario: Checking the impossibility of entering spaces in the "email" field.
        When Enter "test 1234@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint "Please enter a valid email address" appeared

    Scenario: Checking the impossibility to register an email with "@@".
        When Enter "test1234@@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint "Please enter a valid email address" appeared

    Scenario: Checking the impossibility to register an email without "@".
        When Enter "test1234gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint "Please enter a valid email address" appeared

    Scenario: Checking the impossibility to register an email without ".".
        When Enter "test1234@gmailcom" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint "Please enter a valid email address" appeared

    Scenario: Checking the impossibility to register an email with "." before "@".
        When Enter "test1234.@gmail.com" in the "email" field
        And Enter "Test Test" in the "Full name" field
        And Enter "Testtesttest1@" in the "password" field
        And Click checkbox "i agree"
        And Click "Create Account" button
        Then The hint "Please enter a valid email address" appeared

    Scenario: Button "Have a promo?" is enebled
        Then "Have a promo?" button is enebled

    Scenario: Button "sign up with google"  is enebled
        Then "sign up with google" button is enebled

    Scenario: Button "sign up with microsoft"  is enebled
        Then "sign up with microsoft" button is enebled

    Scenario: Checking that clicking on the "telnyx" logo takes you to the main page.
        When click "telnyx" logo
        And wait
        Then open main page

    Scenario: Checking that clicking on the "Sign in" button takes you to the sign in page.
        When click "sign in" button
        And wait
        Then open sign in page

    Scenario: Checking that clicking on the "Terms and Conditions" button takes you to the  Terms and Conditions page.
        When click "Terms and Conditions" button
        And wait
        Then open Terms and Conditions page

    Scenario: Checking that clicking on the "JOIN THE WAITLIST." button takes you to the sign in page.
        When click "JOIN THE WAITLIST." button
        And wait
        Then open product page

    Scenario: Checking that clicking on the "Privacy Policy" button takes you to the sign in page.
        When click "Privacy Policy" button
        And wait
        Then open Privacy Policy page
