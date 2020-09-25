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
      "name": "@Regression"
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
formatter.match({
  "arguments": [
    {
      "val": "available",
      "offset": 43
    }
  ],
  "location": "CommonDefinitions.the_swagger_findByStatus_api_is_available(String)"
});
formatter.result({
  "duration": 1888481490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "PetEndpointStepDefinitions.the_request_response_has_the_correct_response_code(Integer)"
});
formatter.result({
  "duration": 6553985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 63
    },
    {
      "val": "doggie",
      "offset": 73
    }
  ],
  "location": "PetEndpointStepDefinitions.the_pet_requests_response_contains_petname(String,String)"
});
formatter.result({
  "duration": 873664042,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate find by status rest endpoint and get the count of pet name doggie when rest api not available",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie-when-rest-api-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I want execute findByStatus endpoint is not available for \u0027available\u0027 status",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I want to verify request response code as \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I want to verify response and count the list of pets with key \u0027name\u0027 as \u0027doggie\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "available",
      "offset": 59
    }
  ],
  "location": "CommonDefinitions.the_swagger_findByStatus_api_is_not_available(String)"
});
formatter.result({
  "duration": 30171697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "PetEndpointStepDefinitions.the_request_response_has_the_correct_response_code(Integer)"
});
formatter.result({
  "duration": 5996999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 63
    },
    {
      "val": "doggie",
      "offset": 73
    }
  ],
  "location": "PetEndpointStepDefinitions.the_pet_requests_response_contains_petname(String,String)"
});
formatter.result({
  "duration": 102080876,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Validate find by status rest endpoint and get the count of pet name doggie",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want execute findByStatus endpoint with \u0027\u003cfindavailablebystatus\u003e\u0027 status",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to verify request response code as \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I want to verify response and count the list of pets with key \u0027name\u0027 as \u0027doggie\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie;",
  "rows": [
    {
      "cells": [
        "findavailablebystatus"
      ],
      "line": 23,
      "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie;;1"
    },
    {
      "cells": [
        "pending"
      ],
      "line": 24,
      "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie;;2"
    },
    {
      "cells": [
        "sold"
      ],
      "line": 25,
      "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Validate find by status rest endpoint and get the count of pet name doggie",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want execute findByStatus endpoint with \u0027pending\u0027 status",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to verify request response code as \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I want to verify response and count the list of pets with key \u0027name\u0027 as \u0027doggie\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "pending",
      "offset": 43
    }
  ],
  "location": "CommonDefinitions.the_swagger_findByStatus_api_is_available(String)"
});
formatter.result({
  "duration": 484665380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "PetEndpointStepDefinitions.the_request_response_has_the_correct_response_code(Integer)"
});
formatter.result({
  "duration": 1998190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 63
    },
    {
      "val": "doggie",
      "offset": 73
    }
  ],
  "location": "PetEndpointStepDefinitions.the_pet_requests_response_contains_petname(String,String)"
});
formatter.result({
  "duration": 137996247,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Validate find by status rest endpoint and get the count of pet name doggie",
  "description": "",
  "id": "find-pets-count-from-pet-store;validate-find-by-status-rest-endpoint-and-get-the-count-of-pet-name-doggie;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I want execute findByStatus endpoint with \u0027sold\u0027 status",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I want to verify request response code as \u0027200\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I want to verify response and count the list of pets with key \u0027name\u0027 as \u0027doggie\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sold",
      "offset": 43
    }
  ],
  "location": "CommonDefinitions.the_swagger_findByStatus_api_is_available(String)"
});
formatter.result({
  "duration": 475120591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "PetEndpointStepDefinitions.the_request_response_has_the_correct_response_code(Integer)"
});
formatter.result({
  "duration": 2809239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 63
    },
    {
      "val": "doggie",
      "offset": 73
    }
  ],
  "location": "PetEndpointStepDefinitions.the_pet_requests_response_contains_petname(String,String)"
});
formatter.result({
  "duration": 114836563,
  "status": "passed"
});
});