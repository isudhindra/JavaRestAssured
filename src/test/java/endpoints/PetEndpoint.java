package endpoints;

import java.util.Collections;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import stepdefs.World;

public class PetEndpoint extends BaseEndpoints {
	private final String PET_ENDPOINT_PATH = "pet/";
	public World world = new World();

	public PetEndpoint() {
		super();
	}

	public String getPath() {
		System.out.println("PetEndpoint getPath:"+ this.PET_ENDPOINT_PATH);
		return this.PET_ENDPOINT_PATH;
	}
	
	public Response getPetById(RequestSpecification request, String id) {
		System.out.println("PetEndpoint-getPetById getPath:"+ this.getPath());
		System.out.println("PetEndpoint-getPetById id:"+ id);
		System.out.print("PetEndpoint-getPetById getPath:");
		System.out.println(request);
		String url = getBaseUrl() + this.getPath() + id;
		System.out.println("PetEndpoint-getPetById url:"+url);
		System.out.println("PetEndpoint-getPetById BaseEndpoints.GET_REQUEST:"+BaseEndpoints.GET_REQUEST);
		return sendRequest(request, BaseEndpoints.GET_REQUEST, url, null);
	}

	public int countByKeyName(Response response, String keyName,String keyValue) {
//		world.logger.info(response.jsonPath().getList(keyName));
		world.logger.info("********** Frequency of "+ keyName +":"+keyValue+" is : "+Collections.frequency(response.jsonPath().getList(keyName),keyValue));
		return Collections.frequency(response.jsonPath().getList(keyName),keyValue);
	}
	
	
	public int countByKeyName(JsonPath response, String keyName,String keyValue) {
//		world.logger.info(response.getList(keyName));
		world.logger.info("********** Frequency of "+ keyName +":"+keyValue+" is : "+Collections.frequency(response.getList(keyName),keyValue));
		return Collections.frequency(response.getList(keyName),keyValue);
	}
	
	public void verifyPetHasAnId(Response response) {
		String idVal = response.jsonPath().getString("id");
		verifyTrue(idVal != null);
		verifyTrue(!idVal.equalsIgnoreCase(""));
		verifyTrue(Long.parseLong(idVal) > 0);
	}

}
