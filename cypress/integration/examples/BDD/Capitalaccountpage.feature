@Test
Feature: Validating the Capitalaccount page of LP portal

    Background:
        Given The user lands on the authentication page
        When User enter the user name or mailid and password
        And Clicks on the sign in button
        Then Verify user should be successfully navigated to home page
        When User selects the Investor from LPS drop-down
        And User selects the fund from vehicle drop-down

    Scenario: Verify the Overview of IFRS vertical
        And User hits the api request for the capital account overview - IFRS vertical
        When The user clicks on the Capital Account Page
        And Choose the year
        And Choose the quarter
        When User select IFRS vertical from the drop down as the file format
        Then Verify if the datas for selected year and quarter are been displayed for IFRS vertical
        When User clicks on the download button on the top right corner of the header
        Then Verify a excel is downloaded successfully

    Scenario: Verify the Overview KFW capital account
        And User hits the api request for the capital account overview - KFW capital account
        When The user clicks on the Capital Account Page
        And Choose the year
        And Choose the quarter
        When User select KFW capital account from the drop down as the file format
        Then Verify if the datas for selected year and quarter are been displayed for KFW capital account
        When User clicks on the download button on the top right corner of the header
        Then Verify a excel is downloaded successfully

    # Scenario: Verify the display format options from the drop-down
    #     When The user clicks on the Capital Account Page
    #     And Choose the from quarter
    #     And Choose the To quarter
    #     And Click on the Download link
    #     Then Verify the display format and file format text
    #     When Clicking on the Display format
    #     Then Verify the display format option from the display format drop-down
    #     When Clicking on the file format
    #     Then Verify the file format  option from the file format drop-down

    Scenario: Verify the transaction details for the selected dates are displayed
        And User hits the api request for the capital account transaction
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        When User choose the From Date
        And User choose the To Date
        Then Verify if the list of transaction are displayed for the selected dates
        And Verify if total no. of transaction are been displayed in the right corner of the header tab
        When User clicks on the download button on the top right corner of the header
        Then Verify a filtered excel is downloaded successfully
        When User clicks on clear filter button
        Then Verify all the transactions are displayed



    Scenario: Verify if the no transaction message is shown in case of no data
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        When User choose the From Date in the date picker
        And User choose the To Date in the date picker
        Then Verify if a no record found message is been displayed
        And Verify if no transaction for the selected dates are displayed
        And Verify if the download icon is not clickable
        When User clicks on clear filter button
        Then Verify all the transactions are displayed


    Scenario: Verify the transaction are filtered based on capital call
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the transaction type as capital call
        Then Verify if only the capital call are filtered and displayed
        And Verify the no.of transaction for capital call
        When User clicks on the download button on the top right corner of the header
        Then Verify a filtered excel is downloaded successfully
        When User clicks on clear filter button
        Then Verify all the transactions are displayed


    Scenario: Verify the transaction are filtered based on capital distribution
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the transaction type as capital distribution
        Then Verify if only the capital distribution are filtered and displayed
        And Verify the no.of transaction for capital distribution
        When User clicks on the download button on the top right corner of the header
        Then Verify a filtered excel is downloaded successfully
        When User clicks on clear filter button
        Then Verify all the transactions are displayed



    Scenario: Verify the transaction are filtered based on Paid status
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the transaction status as Paid
        Then Verify if only the Paid status transations are filtered and displayed
        And Verify the no.of transaction for Paid status
        When User clicks on the download button on the top right corner of the header
        Then Verify a filtered excel is downloaded successfully
        When User clicks on clear filter button
        Then Verify all the transactions are displayed


    Scenario: Verify the transaction are filtered based on Open status
        When The user clicks on the Capital Account Page
        And The user clicks on the Transaction tab
        And Choose the transaction status as Open
        Then Verify if only the Open status transations are filtered and displayed
        And Verify the no.of transaction for Paid transaction
        When User clicks on the download button on the top right corner of the header
        Then Verify a filtered excel is downloaded successfully
        When User clicks on clear filter button
        Then Verify all the transactions are displayed


