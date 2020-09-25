Feature: Find pets count from pet store 
	This feature includes tests that test the pet RESTFul services for find by status

@Regression 
Scenario:  Validate find by status rest endpoint and get the count of pet name doggie 
	Given I want execute findByStatus endpoint with 'available' status 
	Then I want to verify request response code as '200' 
	And I want to verify response and count the list of pets with key 'name' as 'doggie' 
	
@Regression 
Scenario: Validate find by status rest endpoint and get the count of pet name doggie when rest api not available 
	Given I want execute findByStatus endpoint is not available for 'available' status 
	Then I want to verify request response code as '200' 
	And I want to verify response and count the list of pets with key 'name' as 'doggie' 
	
@Regression 
Scenario Outline: Validate find by status rest endpoint and get the count of pet name doggie 
	Given I want execute findByStatus endpoint with '<findavailablebystatus>' status 
	Then I want to verify request response code as '200' 
	And I want to verify response and count the list of pets with key 'name' as 'doggie' 
	
	Examples: 
		|findavailablebystatus|
		|pending			  |
		|sold				  |

