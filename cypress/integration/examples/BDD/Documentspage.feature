@Test
Feature: Validating the Documents page of LP portal


    Background:
        Given The user lands on the authentication page
        When User enter the user name or mailid and password
        And Clicks on the sign in button
        Then User should successfully be navigated to the home page
        When User selects the Investor from lps drop-down
        And Selects the fund from vehicle drop-down
        And Hits the api request for the documents page

    Scenario: Verify the document is verified from the document folder
        When User clicks on the Documents Page
        Then User should be sucessfully navigated to the documents page
        And Should contain list of folder
        When User click on the folder
        Then User should successfully navigate to the subfolder page
        When User clicks on the sub folder
        And Clicks on the pdf file for preview
        When User clicks on the download button on the pdf view
        Then The pdf must be downloaded sucessfully


   
