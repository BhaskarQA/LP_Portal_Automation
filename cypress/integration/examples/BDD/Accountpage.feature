@Hide
Feature: Validating the Accountpage of LP portal


     Scenario Outline: Verify the profile information and its actions are working as expected
          Given The user landed on the Dashboard page
          And Partner logo is displayed
          When The user clicks the profile icon on the header
          Then The user should be navigated to the account page
          And The user verifies the following details in the profile section
          When The User is able to enter the "<Name>"
          And User is able to choose the Interface language
          And User clicks on the save button
          Then Profile should be successfully updated
          Examples:
               | Name |
               | Value 1 |
               | Value 11 |

     Scenario Outline: Verify if the change password is working as expected
          Given The user landed on the Dashboard page
          And Partner logo is displayed
          When The user clicks the profile icon on the header
          Then The user should be navigated to the account page
          And The user verifies the following details in the password section
          And User enter the "<Current password>","<New password>","<Confirm password>" following details in the password sections
          And User clicks on the change password button
          Then Password should be successfully updated
          Examples:
               | Current password | New password | Confirm password |
               | Value 1 | Value 2 | Value 3 |
               | Value 11 | Value 12 | Value 13 |

     Scenario: Verify if the user is able to delete the account
          Given The user landed on the Dashboard page
          And Partner logo is displayed
          When The user clicks the profile icon on the header
          Then The user should be navigated to the account page
          And The user verifies the following details in the delete section
          When The User clicks on the Delete button
          Then Account should be successfully deleted


