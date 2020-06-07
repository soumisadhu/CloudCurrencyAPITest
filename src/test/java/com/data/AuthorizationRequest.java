package com.data;

public class AuthorizationRequest {

	String api_key;
	String login_id;
	public AuthorizationRequest(String login_id,String api_key) {
		this.login_id =login_id;
		this.api_key = api_key;
	}
	public String getApi_key() {
		return api_key;
	}
	public void setApi_key(String api_key) {
		this.api_key = api_key;
	}
	public String getLogin_id() {
		return login_id;
	}
	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}
}
