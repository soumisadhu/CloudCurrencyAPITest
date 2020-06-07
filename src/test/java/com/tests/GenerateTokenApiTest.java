package com.tests;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import org.apache.http.Header;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.testng.Assert;

import com.base.TestBase;
import com.client.RestClient;
import com.data.AuthorizationRequest;
import com.data.AuthorizationResponse;
import com.fasterxml.jackson.databind.ObjectMapper;

public class GenerateTokenApiTest extends TestBase {

	TestBase testbase =new TestBase();
	String url;
	String serviceUrl;
	String apiUrl;
	CloseableHttpResponse closebaleHttpResponse;
	RestClient client = new RestClient();
	AuthorizationRequest payload;
	AuthorizationResponse responsePayload;

	public void setUpGetAuthTokenUrl() {
		url = prop.getProperty("BaseURL");
		serviceUrl = prop.getProperty("TokenServiceURL");
		apiUrl = url + serviceUrl;

	}

	public String  generateAuthToken() throws ClientProtocolException, IOException {
		
		HashMap<String,String>headerMap = new HashMap<String,String>();
		headerMap.put("Content-Type", "application/json");
		String login_id = prop.getProperty("login_id");
		String api_key = prop.getProperty("api_key");
		payload = new AuthorizationRequest(login_id,api_key);
		ObjectMapper mapper = new ObjectMapper();
		String jsonString = mapper.writeValueAsString(payload);
		closebaleHttpResponse = client.post(apiUrl,jsonString,headerMap);
		responsePayload = mapper.readValue( EntityUtils.toString(closebaleHttpResponse.getEntity(), "UTF-8"), AuthorizationResponse.class);
		String auth_token = responsePayload.getAuth_token();
		return auth_token;
	}
	
	public int  validateGetTokenAPIStatus()
	{
		int statusCode = closebaleHttpResponse.getStatusLine().getStatusCode();
		return statusCode;
	}

}
