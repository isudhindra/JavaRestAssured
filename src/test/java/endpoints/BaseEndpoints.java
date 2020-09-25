package endpoints;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONObject;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import stepdefs.World;


public class BaseEndpoints {
	public static final int SUCCESS_STATUS_CODE = 200;

	public static final int GET_REQUEST = 0;
	public static final int POST_REQUEST = 1;
	public static final int DELETE_REQUEST = 2;
	public static final int PUT_REQUEST = 3;
	public World world = new World();
	
	public HashMap<String, String> queryParams= new HashMap<String, String>();

	protected final String base_url = "https://petstore.swagger.io/v2/";

	public BaseEndpoints() {
	}
	
	public void setfindByStatusQueryParams(String status) {
		queryParams.clear();
		this.queryParams.put("status", status);
		world.logger.info("Setting query parameters with status:"+status );
	}

	public void verifyResponseKeyValues(String key, String val, Response r) {
		String keyValue = r.jsonPath().getString(key);
		world.logger.info("*** assertThat verifyResponseKeyValues Expected:"+keyValue + " Actual:"+ is(val));
		assertThat(keyValue, is(val));
	}

	public void verifyTrue(boolean val) {
		assertTrue(val);
	}

	public void verifyFalse(boolean val) {
		assertFalse(val);
	}

	public void verifyResponseStatusValue(Response response, int expectedCode) {
		world.logger.info("*** verifyResponseStatusValue Expected:"+response.getStatusCode() + " Actual:"+ is(expectedCode));
		assertThat(response.getStatusCode(), is(expectedCode));
	}

	public String getBaseUrl() {
		return this.base_url;
	}

	public void verifyNestedResponseKeyValues(String nestTedCompnent, String key, String val, Response r) {
		Map<String, String> nestedJSON = r.jsonPath().getMap(nestTedCompnent);
		String actual = String.valueOf(nestedJSON.get(key));
		assertThat(actual, is(val));
	}

	public RequestSpecification getRequestWithJSONHeaders() {
		RequestSpecification r = RestAssured.given();
		r.header("Content-Type", "application/json");
		world.logger.info("*** getRequestWithJSONHeaders: "+"Content-Type: application/json");
		return r;
	}

	public RequestSpecification getRequestWithXMLHeaders() {
		RequestSpecification r = RestAssured.given();
		r.header("Content-Type", "application/xml");
		world.logger.info("*** getRequestWithXMLHeaders: "+"Content-Type: application/xml");
		return r;
	}

	protected JSONObject createJSONPayload(Object pojo) {
		return new JSONObject(pojo);
	}
	
	public Response sendRequest(RequestSpecification request, int requestType, String url, Object pojo) {
		
		try {
		Response response = null;

		// Add the Json to the body of the request
		if (null != pojo) {
			String payload = createJSONPayload(pojo).toString();
			request.body(payload);
		}

		// need to add a switch based on request type
		switch (requestType) {
		case BaseEndpoints.GET_REQUEST:
			if (null == request) {
				response = RestAssured.given().urlEncodingEnabled(false).queryParams(this.queryParams).get(url);
			} else {
				response = request.urlEncodingEnabled(false).queryParams(this.queryParams).get(url);
			}
			break;
		case BaseEndpoints.POST_REQUEST:
			if (null == request) {
				response = RestAssured.when().post(url);
			} else {
				response = request.post(url);
			}
			break;
		case BaseEndpoints.DELETE_REQUEST:
			if (null == request) {
				response = RestAssured.when().delete(url);
			} else {
				response = request.delete(url);
			}
			break;
		case BaseEndpoints.PUT_REQUEST:
			if (null == request) {
				response = RestAssured.when().put(url);
			} else {
				response = request.put(url);
			}
			break;
		default:
			if (null == request) {
				response = RestAssured.when().post(url);
			} else {
				response = request.post(url);
			}
			response = request.post(url);
			break;
		}
		return response;
		}catch(Exception e){
			world.logger.error("Exception in sendRequest"+e );
			return null;
		}
		
	}
}
