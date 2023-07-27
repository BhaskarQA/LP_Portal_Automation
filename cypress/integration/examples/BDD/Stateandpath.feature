@Test
Feature: Validating the State and path for the LP portal


    Background:
        Given The user lands on the authentication page
        When User enter the user name or mailid and password
        And Clicks on the sign in button

    Scenario Outline: Verify if the path as url with (empty) or /
        When The user hits the url with "<path>" as empty path or /
        And User hits the api request for base data
        Then User should navigate to the first lp, first vechile, first accessible menu
        Examples:
            | path |
            |      |
            | /    |

    Scenario Outline: Verify if the path as url with /lp or /lp/
        When The user hits the url with "<path>" as /lp or /lp/
        Then User should navigate to the first lp, first vechile, first accessible menu
        Examples:
            | path |
            | lp   |
            | lp/  |

    Scenario Outline: Verify if the path as url with /{something invalid}
        When The user hits the url with "<path>" as /something invalid
        Then User should able to see the pop up
        Then User should navigate to the first lp, first vechile, first accessible menu
        Examples:
            | path                                                                                                         |
            | @invalid                                                                                                     |
            | invalid details/0409c59e-e368-497d-8c7e-e3084c996c07/vehicles/2801c07a-9b8e-4f17-aaae-cb50cf21c728/dashboard |

    Scenario Outline: Verify if the path as url with /lp/{invalid LP ID}
        When The user hits the url with "<path>" as /lp with invalid LP ID
        Then User should able to see the pop up
        Then User should navigate to the first lp, first vechile, first accessible menu
        Examples:
            | path                                                                                           |
            | lp/1000- invalid -0000gf00/                                                                    |
            | lps/0409c59e-invalid-8c7e-e3084c996c07/vehicles/2801c07a-9b8e-4f17-aaae-cb50cf21c728/dashboard |

    Scenario Outline: Verify if the path as url with /lp/{invalid LP ID}
        When The user hits url with "<path>" as /lp with valid LP ID
        Then User should navigate to the requested lp, first vechile of request lp, first accessible menu
        Examples:
            | path                                     |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07  |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/ |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/vehicle
        When The user hits the url with "<path>" as /lp with valid LP ID with vehicle
        Then User should navigate to the requested lp, first vechile of request lp, first accessible menu
        Examples:
            | path                                             |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle  |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/ |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/{something invalid}
        When The user hits the url with "<path>" as /lp with valid LP ID with something invalid
        Then User should able to see the pop up
        Then User should navigate to the requested lp, first vechile of request lp, first accessible menu
        Examples:
            | path                                                                                               |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/something invalid                                          |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/invalid@123/2801c07a-9b8e-4f17-aaae-cb50cf21c728/dashboard |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/vehicle/{invalid vehicle ID}
        When The user hits the url with "<path>" as /lp with valid LP ID with vehicle with invalid vehicle ID
        Then User should able to see the pop up
        Then User should navigate to the requested lp, first vechile of request lp, first accessible menu
        Examples:
            | path                                                                       |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/invalid id                 |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801ab50cf21c728/dashboard |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/vehicle/{valid vehicle ID}
        When The user hits the url with "<path>" as /lp with valid LP ID with vehicle with valid vehicle ID
        Then User should navigate to the requested lp, requested vechile, first accessible menu
        Examples:
            | path                                                                                  |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801c07a-9b8e-4f17-aaae-cb50cf21c728  |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801c07a-9b8e-4f17-aaae-cb50cf21c728/ |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/vehicle/{valid vehicle ID}/{valid menu item}
        When The user hits the url with "<path>" as /lp with valid LP ID with vehicle with valid vehicle ID with valid menu item
        Then User should navigate to the requested lp, requested vechile, requested menu
        Examples:
            | path                                                                                           |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801c07a-9b8e-4f17-aaae-cb50cf21c728/documents |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/vehicle/{valid vehicle ID}/{invalid menu item}
        When The user hits the url with "<path>" as /lp with valid LP ID with vehicle with valid vehicle ID with invalid menu item
        Then User should able to see the pop up
        Then User should navigate to the requested lp, requested vechile, first accessible menu
        Examples:
            | path                                                                                              |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801c07a-9b8e-4f17-aaae-cb50cf21c728/invalid menu |

    Scenario Outline: Verify if the path as url with /lp/{valid LP ID}/vehicle/{valid vehicle ID}/{valid menu item}/{invalid parameters}
        When The user hits the url with "<path>" as /lp with valid LP ID with vehicle with valid vehicle ID with valid menu item and invalid parameters
        Then User should able to see the pop up
        Then User should navigate to the requested lp, requested vechile, requested menu, default parameters
        Examples:
            | path                                                                                                         |
            | lp/0409c59e-e368-497d-8c7e-e3084c996c07/vehicle/2801c07a-9b8e-4f17-aaae-cb50cf21c728/capital-account/invalid |









