$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchByPet.feature");
formatter.feature({
  "line": 1,
  "name": "Find pets count from pet store",
  "description": "This feature includes tests that test the pet RESTFul services for find by status",
  "id": "find-pets-count-from-pet-store",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Validate find by status rest endpoint and get the count of pet name doggie",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I want execute findByStatus endpoint with \u0027available\u0027 status",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I want to verify request response code as \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I want to verify response and count the list of pets with key \u0027name\u0027 as \u0027doggie\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "Validate find by status rest endpoint and get the count of pet name doggie when rest api not available",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie-when-rest-api-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want execute findByStatus endpoint is not available for \u0027available\u0027 status",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I want to verify request response code as \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I want to verify response and count the list of pets with key \u0027name\u0027 as \u0027doggie\u0027",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});