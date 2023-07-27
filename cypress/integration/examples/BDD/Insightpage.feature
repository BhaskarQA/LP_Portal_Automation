@Test
Feature: Validating the Insight page of LP portal

    Background:
        Given The user lands on the authentication page
        When User enter the user name or mailid and password
        And Clicks on the sign in button
        Then Verify user should be successfully navigated to home page
        When User selects the Investor from LPS drop-down
        And User selects the fund from vehicle drop-down


    Scenario: Verify the Fund Metrics - Net performance
        And The user hits the api request for insights - Fund Metrics
        When The user clicks on the Insights Page
        Then Details on the TVPI widget are verified
        And Details on the Capital deployed widget are verified
        And Details on the Portfolio Value widget are verified
        And Details on the Net IRR widget are verified
        And Details on the Cumulative net cash flow widget are verified
        When User clicks on the right side arrow of the Net perfromance sub heading
        Then Verify if all the charts are collapsed under Net performance


    Scenario: Verify the Fund Metrics - Gross performance
        And The user hits the api request for insights - Fund Metrics
        When The user clicks on the Insights Page
        And Scrolls to Gross performance section
        Then Details on the MOIC widget are verified
        And Details on the Capital deployed widget in Gross performance section are verified
        And Details on the Portfolio Value widget in Gross performance section are verified
        And Details on the Gross IRR widget are verified
        When User clicks on the right side arrow of the Gross perfromance sub heading
        Then Verify if all the charts are collapsed under Gross performance


    Scenario: Verify the Fund Metrics - LP details
        And The user hits the api request for insights - Fund Metrics
        When The user clicks on the Insights Page
        And Scrolls to LP details section
        Then Details on the Net LP proceeds widget are verified
        And Details on the Net LP proceeds over time widget are verified
        And Details on the LP called capital widget are verified
        And Details on the LP return of contributed capital widget are verified
        And Details on the Proceeds to LPs - Hurdle rate widget are verified
        And Details on the Proceeds to LPs - after catch-up and carried interest are verified
        When User clicks on the right side arrow of the LP details sub heading
        Then Verify if all the charts are collapsed under LP details


    Scenario: Verify the Fund Metrics - GP details
        And The user hits the api request for insights - Fund Metrics
        When The user clicks on the Insights Page
        And Scrolls to GP details section
        Then Details on the GP proceeds widget are verified
        And Details on the GP contributed capital widget in Gross performance section are verified
        And Details on the Proceeds to GP widget in Gross performance section are verified
        And Details on the GP Catch-up widget are verified
        And Details on the Carried interest widget are verified
        And Details on the Net GP proceeds widget are verified
        And Details on the Management fees widget are verified
        When User clicks on the right side arrow of the GP details sub heading
        Then Verify if all the charts are collapsed under LP details


    Scenario: Verify the Portfolio Investment - Capital deployment
        And The user hits the api request for insights - Portfolio Investment
        When The user clicks on the Insights Page
        And User selects the portfolio investment tab
        Then Details on the Initial investments vs. follow-on investments widget under the capital deployment are verified
        And Details on the No. of initial investments by entry round widget are verified
        And Details on the Capital deployment pacing widget are verified
        And Details on the Initial investment pacing widget are verified
        And Details on the Follow-on investment pacing widget are verified
        When User clicks on the right side arrow of the Capital deployment sub heading
        Then Verify if all the charts are collapsed under Capital deployment


    Scenario: Verify the Portfolio Investment - Exits
        And The user hits the api request for insights - Portfolio Investment
        When The user clicks on the Insights Page
        And User selects the portfolio investment tab
        And Scrolls to Exits section
        Then Details on the Distribution of exit multiples widget are verified
        And Details on the Deals by sector widget are verified
        And Details on the Average MOIC at exit by sector widget are verified
        And Details on the Average holding period per month widget are verified
        When User clicks on the right side arrow of the Exits sub heading
        Then Verify if all the charts are collapsed under Exits







