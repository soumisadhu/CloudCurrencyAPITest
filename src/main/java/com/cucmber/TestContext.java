package com.cucmber;

import com.tests.GenerateTokenApiTest;

public class TestContext {

	public ScenarioContext scenarioContext;
	public GenerateTokenApiTest generateTokenApiTest;

	public TestContext() {
		scenarioContext = new ScenarioContext();
		generateTokenApiTest = new GenerateTokenApiTest();
	}
	public GenerateTokenApiTest getGenerateTokenApiTest() {
		 return generateTokenApiTest;
		 }

	public ScenarioContext getScenarioContext() {
		return scenarioContext;
	}
}
