@Test
Feature: Validating the Leftpanel of LP portal


    Background:
        Given The user lands on the authentication page
        When User enter the user name or mailid and password
        And Clicks on the sign in button
        Then Verify user should be successfully navigated to home page
        When User selects the Investor from LPS drop-down
        And User selects the fund from vehicle drop-down

    Scenario: Verify the user is redirected to the dashboard page and verify the breadcrumbs
        Then Verify Breadcrumbs - / Dashboard

    Scenario: Verify the user is redirected to the Insights page - Fund Metrics and verify the breadcrumbs
        When The user clicks on the insights Page
        Then Verify Breadcrumbs - / Insights / Fund Metrics

    Scenario: Verify the user is redirected to the Insights page - Portfolio Investments and verify the breadcrumbs
        When The user clicks on the insights Page
        And The user clicks on the Portfolio Investments tab
        Then Verify Breadcrumbs - / Insights / Portfolio Investments

    Scenario: Verify the user is redirected to the Capital Account page- Overview and verify the breadcrumbs
        When The user clicks on the Capital Account Page
        Then Verify Breadcrumbs - / Capital Account / Overview

    Scenario: Verify the user is redirected to the Capital Account - Transactions page and verify the breadcrumbs
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        Then Verify Breadcrumbs - / Capital Account / Transactions

    Scenario: Verify the user is redirected to the Reports page and verify the breadcrumbs
        When The user clicks on the Reports Page
        Then Verify Breadcrumb - Reports / year / quarter
    # Then Verify Breadcrumbs - / Reports/ Quarterly / 2022 / Q4

    # Scenario: Verify the user is redirected to the Reports page - Annually page and verify the breadcrumbs
    #     When The user clicks on the Reports Page
    #     And The user clicks on the Annually tab
    #     Then Verify Breadcrumbs - / Reports / Annually /

    Scenario: Verify the user is redirected to the Documents page and verify the breadcrumbs
        When The user clicks on the Documents Page
        Then Verify Breadcrumbs - / Documents

# Scenario: Verify the user is redirected to the Settings page - User and verify the breadcrumbs
#     When The user clicks on the Settings Page
#     Then Verify Breadcrumbs - / Settings / User

# Scenario: Verify the user is redirected to the Settings page - Investor page and verify the breadcrumbs
#     When The user clicks on the Settings Page
#     And The user clicks on the Investor tab
#     Then Verify Breadcrumbs - / Settings / Investor

