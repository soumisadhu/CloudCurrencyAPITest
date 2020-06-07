package com.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class TestBase {

	public Properties prop;

	public TestBase() {
		try {
			prop = new Properties();
			FileInputStream io = new FileInputStream(
					"D:\\Selenium\\SeleniumTestNGConcept\\CloudCurrencyApiAutomationProject\\src\\main\\java\\com\\config\\config.properties");
			prop.load(io);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

}
