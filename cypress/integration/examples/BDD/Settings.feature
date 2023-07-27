@Hide
Feature: Validating the Setting of LP portal
    Setting Assertions
    Scenario: Users menu
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Settings menu click
        When User clicks on Users in the toggle button
        Then Should successfully navigate to User page
        When User clicks on the Username
        And Click on fund permit checkbox
        And Should click on save button

    Scenario Outline: Investor menu
        Given User lands on the Dashboard
        And Partners logo verified
        Then Page redirects successfully on Settings menu click
        When User on clicks Investor in the toggle button
        Then Should successfully navigate to Investor page
        When User enters "<Company>" and "<Street>" in the Address widget
        And Should enter "<VAT number>","<Commercial Register Number>","<IBAN>" in More widget
        Examples:
            | Company | Street  | VAT number | Commercial Register Number | IBAN    |
            | Value 1 | Value 2 | Value 3    | Value 4                    | Value 5 |