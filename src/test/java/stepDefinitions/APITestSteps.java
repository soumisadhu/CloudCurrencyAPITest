package stepDefinitions;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Assert;

import com.cucmber.TestContext;
import com.enums.Context;
import com.tests.GenerateTokenApiTest;
import com.tests.MakeCurrencyConversionApiTest;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class APITestSteps {

	TestContext testContext;
	GenerateTokenApiTest tokenGenrateTest;
	MakeCurrencyConversionApiTest currencyConversionTest = new MakeCurrencyConversionApiTest();

	public APITestSteps(TestContext context) {
		testContext = context;
		tokenGenrateTest = testContext.getGenerateTokenApiTest();

	}

	@When("^I setup the url for generate auth token$")
	public void i_setup_the_url_for_generate_auth_token() {

		tokenGenrateTest.setUpGetAuthTokenUrl();
	}

	@When("^I generate auth token using valid userid and api key$")
	public void i_generate_auth_token_using_valid_userid_and_api_key() throws ClientProtocolException, IOException {

		String auth_token = tokenGenrateTest.generateAuthToken();
		testContext.scenarioContext.setContext(Context.AUTH_TOKEN, auth_token);

	}

	@Then("^I Validate the response code is (\\d+) and auth token is generated$")
	public void i_Validate_the_response_code_is_and_auth_token_is_generated(int responseCode) {

		int status = tokenGenrateTest.validateGetTokenAPIStatus();
		Assert.assertEquals(responseCode, status);
	}

	@When("^I setup the url for create conversion$")
	public void i_setup_the_url_for_create_conversion() {
		currencyConversionTest.setUpMakeCurrencyTokenUrl();
	}

	@When("^I create conversion with \"([^\"]*)\" \"([^\"]*)\" (\\d+) \"([^\"]*)\" \"([^\\\"]*)\"$")
	public void i_create_conversion_with(String buy_currency, String sell_currency, int amount, String fixed_side,
			String reason) throws ClientProtocolException, IOException {
		String auth_token = (String) testContext.scenarioContext.getContext(Context.AUTH_TOKEN);
		String responseAmount=currencyConversionTest.makeCurrencyConversion(buy_currency, sell_currency, amount, reason, fixed_side,
				auth_token);
		testContext.scenarioContext.setContext(Context.AMOUNT, responseAmount);
	}

	@Then("^I Validate the response code is (\\d+)$")
	public void i_Validate_the_response_code_is_and_creation_quote_is_failed_with(int respnseCode) {
		int status = currencyConversionTest.validatemakeConversionTokenAPIStatus();
		Assert.assertEquals(respnseCode, status);
	}

	@When("^Without \"([^\"]*)\" create conversion with \"([^\"]*)\" \"([^\"]*)\" (\\d+) \"([^\"]*)\" \"([^\"]*)\"$")
	public void without_create_conversion_with(String missingParam, String buy_currency, String sell_currency,
			int amount, String fixed_side, String reason) throws ClientProtocolException, IOException {
		String auth_token = (String) testContext.scenarioContext.getContext(Context.AUTH_TOKEN);
		String error_message = currencyConversionTest.makeCurrencyConversionNegativeScenario(missingParam, buy_currency,
				sell_currency, amount, reason, fixed_side, auth_token);
		testContext.scenarioContext.setContext(Context.MESSAGE, error_message);
	}

	@Then("^I Validate message is \"([^\"]*)\"$")
	public void i_Validate_message_is(String msg) {
		String error_msg = (String) testContext.scenarioContext.getContext(Context.MESSAGE);
		Assert.assertEquals(msg, error_msg);
	}
	
	@Then("^I validate amount is \"([^\"]*)\"$")
	public void i_validate_amount_is(String expectedAmount){
		String amount = (String) testContext.scenarioContext.getContext(Context.AMOUNT);
		Assert.assertEquals(expectedAmount, amount);
	}

}
