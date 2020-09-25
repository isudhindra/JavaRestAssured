
package stepdefs;

import cucumber.api.java.en.Then;
import endpoints.PetEndpoint;
import io.restassured.response.ResponseBodyExtractionOptions;


public class PetEndpointStepDefinitions {

	private World world;
	private PetEndpoint petEndpoint = new PetEndpoint();
	

	public PetEndpointStepDefinitions(World world) {
		this.world = world;
	}

	@Then("^I want to verify request response code as '(\\d+)'$")
	public void the_request_response_has_the_correct_response_code(Integer rc) {
		petEndpoint.verifyResponseStatusValue(world.getResponse(), rc.intValue());
	}

	@Then("^I want to verify response and count the list of pets with key '(.*?)' as '(.*?)'$")
	public void the_pet_requests_response_contains_petname(String keyName,String keyValue) {
		if(world.getResponse()==null){
			petEndpoint.countByKeyName(((ResponseBodyExtractionOptions) world.getResponseJSONObject()).jsonPath(), keyName, keyValue);
		}else {
			petEndpoint.countByKeyName(world.getResponse(), keyName, keyValue);
		}
		
	}


}
