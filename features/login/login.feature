Feature: Try to login as any user
  I want to login unsuccessfully.
  So that I can check the warnings depend on this behavior

  Scenario: Landing login page
    Given that user on homepage
    When user click signin button
    Then user should land to the login page
  @cell
  Scenario: Username and Password did not match / User can not log in
    Given that user on login page
    Given that "#user_login" input field filled with keyword "atakan"
    Given that "#user_password" input field filled with keyword "wrongpassword"

    When user select Login button

    Then warning pop-up with text should showed up
