package com.tests;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;

import javax.annotation.Nullable;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;

import com.base.TestBase;
import com.client.RestClient;
import com.data.AuthorizationRequest;
import com.data.AuthorizationResponse;
import com.data.CurrencyConversionRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.util.TestUtil;

public class MakeCurrencyConversionApiTest extends GenerateTokenApiTest {

	TestBase testbase = new TestBase();
	String url;
	String serviceUrl;
	String apiUrl;
	CloseableHttpResponse closebaleHttpResponse;
	RestClient client = new RestClient();
	CurrencyConversionRequest payload;
	AuthorizationResponse responsePayload;
	GenerateTokenApiTest token = new GenerateTokenApiTest();

	public void setUpMakeCurrencyTokenUrl() {
		url = prop.getProperty("BaseURL");
		serviceUrl = prop.getProperty("ConversionServiceURL");
		apiUrl = url + serviceUrl;
	}

	public int makeCurrencyConversion(String buy_currency, String sell_currency, int amount, String reason,
			String fixed_side, String auth_token) throws ClientProtocolException, IOException {

		HashMap<String, String> headerMap = new HashMap<String, String>();
		headerMap.put("Content-Type", "application/json");
		headerMap.put("X-Auth-Token", auth_token);
		boolean term_agreement = true;

		payload = new CurrencyConversionRequest(buy_currency, sell_currency, fixed_side, amount, term_agreement,
				reason);
		ObjectMapper mapper = new ObjectMapper();
		String jsonString = mapper.writeValueAsString(payload);
		closebaleHttpResponse = client.post(apiUrl, jsonString, headerMap);
		String responseString = EntityUtils.toString(closebaleHttpResponse.getEntity(), "UTF-8");
		JSONObject responseJson = new JSONObject(responseString);
		int client_buy_amount = Integer.parseInt(TestUtil.getValueByJPath(responseJson, "/client_buy_amount"));

		/*
		 * responsePayload =
		 * mapper.readValue(responseString,AuthorizationResponse.class); int
		 * responseAmount = responsePayload.getAmount();
		 */

		return client_buy_amount;

	}

	public int validatemakeConversionTokenAPIStatus() {
		int statusCode = closebaleHttpResponse.getStatusLine().getStatusCode();
		return statusCode;
	}

	public String makeCurrencyConversionNegativeScenario(String missingParameter, String buy_currency,
			String sell_currency, int amount, String reason, String fixed_side, String auth_token)
			throws ClientProtocolException, IOException {

		HashMap<String, String> headerMap = new HashMap<String, String>();
		headerMap.put("Content-Type", "application/json");
		headerMap.put("X-Auth-Token", auth_token);
		boolean term_agreement = true;
		payload = new CurrencyConversionRequest(buy_currency, sell_currency, fixed_side, amount, term_agreement,
				reason);
		ObjectMapper mapper = new ObjectMapper();
		String jsonString = mapper.writeValueAsString(payload);
		closebaleHttpResponse = client.post(apiUrl, jsonString, headerMap);
		String responseString = EntityUtils.toString(closebaleHttpResponse.getEntity(), "UTF-8");
		JSONObject responseJson = new JSONObject(responseString);
		String message = "";
		if (missingParameter.equalsIgnoreCase("sell_currency")) {
			message = TestUtil.getValueByJPath(responseJson, "/error_messages/sell_currency[0]/message");
		} else if (missingParameter.equalsIgnoreCase("buy_currency")) {
			message = TestUtil.getValueByJPath(responseJson, "/error_messages/buy_currency[0]/message");
		} else if (missingParameter.equalsIgnoreCase("fixed_side")) {
			message = TestUtil.getValueByJPath(responseJson, "/error_messages/fixed_side[0]/message");
		} else if (missingParameter.equalsIgnoreCase("amount")) {
			message = TestUtil.getValueByJPath(responseJson, "/error_messages/base[0]/message");
		}
		return message;
	}

}
