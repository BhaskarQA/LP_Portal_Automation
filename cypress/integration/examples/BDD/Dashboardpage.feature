@Test
Feature: Validating the Dashboard page of LP portal

     Background:
          Given The user lands on the authentication page
          When User enter the user name or mailid and password
          And Clicks on the sign in button
          Then Verify user should be successfully navigated to home page
          When User selects the Investor from LPS drop-down
          And User selects the fund from vehicle drop-down

     Scenario: Verify the fund and investor
          When The user hits the api request for the base data
          Then Verify partner logo is displayed on the left panel

     Scenario: Verify if the timeline widget is displayed on the dashboard page
          When The user hits the api request for the dashboard
          Then Verify timeline widget is displayed
          And Verify the investment start date in the timeline
          And Verify the liquidation end date in the timeline
          When User hover on the events in the timeline
          Then A tooltip should be visible

     Scenario: Verify if the Banner widget is displayed on the dashboard page
          And Banner Widget is displayed
          When User click on the banner widget it redirected to a respective url

     Scenario: Verify if the investment widget is displayed on the dashboard page
          And Investment Widget is displayed
          Then Verify the investment widgets and their respective graphs

     Scenario: Verify if the performance widget is displayed on the dashboard page
          And Performance Widget is displayed
          Then Details on the Performance widget are verified
          When User click on the info icon on the performance widget
          Then Verify if user is able to see the metric and calculation pop-up

     Scenario: Verify user navigates to the insights page upon clicking on the see details links from the performance widget
          And Performance Widget is displayed
          When Clicking on the see details link from the performance widget
          Then User should navigate to the Insights page successfully

     Scenario: Verify if the capital account widget is displayed on the dashboard page
          When The user hits the api request for the dashboard
          And Capital account Widget is displayed
          Then Details on the capital account widget are verified

     Scenario: Verify user navigates to the capital account page upon clicking on the see details links from the capital account widget
          And Capital account Widget is displayed
          When Clicking on the see details link from the capital account widgets
          Then User should navigate to the capital account page successfully

     Scenario: Verify the upcoming events widgets
          When The user hits the api request for the upcoming events
          Then Upcoming event widget is displayed
          And Should contain the list of events
          When User click on any of the events
          Then Verify the event is getting downloaded

     Scenario: Verify the updates widgets
          When The user hits the api request for the updates
          And Updates widget is verified
          When User click on last login
          Then Should contain list of updates for last login
          When User click on last month
          Then Should contain list of updates for last month
          When User clicks on any of the updates
          Then User should sucessfully navigate to the respective page

     Scenario: Verify the news widgets
          When The user hits the api request for the news
          Then News widget is displayed
          And Should contain the list of news
          When User clicks on any of the news
          Then Verify user navigates to the external url




