
Feature: Login to SauceDemo website

Scenario: Verify error message on login without username
    Given User is located on the main page of saucedemo website
    When User click “Login” button
    Then User should see “Epic sadface: Username is required” error message

