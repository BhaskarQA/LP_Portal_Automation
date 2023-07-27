@Test
Feature: Validating the Reports page of LP portal

     Background:
          Given The user lands on the authentication page
          When User enter the user name or mailid and password
          And Clicks on the sign in button
          Then Verify user should be successfully navigated to home page
          When User selects the Investor from LPS drop-down
          And User selects the fund from vehicle drop-down
          When The user hits the api request for the reports

    Scenario: Verify the report page pdf is verified
        When The user clicks on the Reports Page
        Then User should sucessfully navigated to the report page
        When User selects the year from dropdown
        And User selects the quarter from the dropdown
        Then The user should get the following reports for the selected quarter
        When User clicks on any of the reports
        Then User should able to see the pdf for the selected report
        # When User click on the maximize button on the PDF header 
        # Then The Pdf should maximize to the full view of the application
        # When User clicks on the minimize button on the PDF header
        # Then The Pdf should minimize back to its previews view 
        # When Clicking on the table of contents
        # Then Respective pdf page is navigated

    # Scenario: Verify the annually report pdf is verified
    #     When The user clicks on the Reports Page
    #     And The user clicks on the Annually tab
    #     And Select the year folder
    #     And Choose the pdf
    #     Then The user should get the following documents in annually tab
    #     And User able to see the pdf