package stepdefs;

import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.json.simple.JSONObject;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


public class World {
	private Response response;
	private JSONObject JSONresponse;
	private RequestSpecification request;
	public Logger logger;
	
	public World() {
		logger=Logger.getLogger("CucumberBDD");
		PropertyConfigurator.configure("Log4j.properties");
		logger.setLevel(Level.DEBUG);
	}

	public void setResponse(Response response) {
//		logger.info("************* Reponse Body *****************"+response.body().asString());
		this.response = response;
	}
	
	public void setResponse(org.json.simple.JSONObject data) {
		logger.info("************* Set Response *****************"+data);
		this.JSONresponse = data;
	}
	
	public Response getResponse() {
//		logger.info("************* get Response *****************"+this.response.body().asString());
		return this.response;
	}
	
	public JSONObject getResponseJSONObject() {
//		logger.info("************* getResponseJSONObject *****************"+this.response.body().asString());
		return this.JSONresponse;
	}
	
	public void setRequest(RequestSpecification request) {
		logger.info("************* setRequest *****************"+request.log().all());
		this.request = request;
	}

	public RequestSpecification getRequest() {
		logger.info("************* getRequest *****************"+request.log().all());
		return this.request;
	}
	
}
