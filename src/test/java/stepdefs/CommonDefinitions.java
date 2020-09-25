package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import endpoints.BaseEndpoints;
import io.restassured.builder.ResponseBuilder;
import io.restassured.response.Response;
import java.io.FileNotFoundException;
import java.nio.file.Files;
import java.nio.file.Paths;


public class CommonDefinitions {
	
	private World world;
	private BaseEndpoints be = new BaseEndpoints();

	public CommonDefinitions(World world) {
		this.world = world;
	}
	
	@Given("^the Swagger Petstore API is available$") 
	public void the_swagger_petstore_api_is_available() {
		String url = be.getBaseUrl() + "swagger.json";
		be.sendRequest(null, BaseEndpoints.GET_REQUEST, url, null).then().statusCode(200);
	}
	
	@Given("^I want execute findByStatus endpoint with '(.*?)' status$") 
	public void the_swagger_findByStatus_api_is_available(String status) {
		
		try {
			be.setfindByStatusQueryParams(status);
			String url = be.getBaseUrl() + "pet/findByStatus";
			world.setResponse(be.sendRequest(null, BaseEndpoints.GET_REQUEST, url,null));
		}catch(Exception e) {
			world.logger.error("Exception from the_swagger_findByStatus_api_is_available: "+e);
		}
	}
	
	
	@Given("^I want execute findByStatus endpoint is not available for '(.*?)' status$") 
	public void the_swagger_findByStatus_api_is_not_available(String status) {
		
		try {
	        //Use JSONObject for simple JSON and JSONArray for array of JSON.
	        String data= new String(Files.readAllBytes(Paths.get(System.getProperty("user.dir")+"/jsonEndpoints/pets.json")));
	        Response build = new ResponseBuilder().setBody(data).setContentType("json").setStatusCode(200).build();
	        world.setResponse(build);
		}catch(FileNotFoundException e1) {
			world.logger.error("Json file not found");
		}catch(Exception e) {
			world.logger.error("Exception from the_swagger_findByStatus_api_is_not_available: "+e);
		}
	}
	
	
	@Then("^the requests response will contain the value '(.*?)' for the '(.*?)' field$")
	public void i_will_be_able_to_run_connected_step_definitions(String val, String key) {
		be.verifyResponseKeyValues(key, val, world.getResponse());
	}

}
