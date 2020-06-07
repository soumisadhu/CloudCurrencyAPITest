package com.client;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import org.apache.http.Header;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;

public class RestClient {


	public CloseableHttpResponse post(String url, String payload, HashMap<String, String> headerMap)
			throws ClientProtocolException, IOException {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(url);
		httpPost.setEntity(new StringEntity(payload));

		for (Map.Entry<String, String> entry : headerMap.entrySet()) {
			httpPost.addHeader(entry.getKey(), entry.getValue());
		}
		CloseableHttpResponse httpPostResponse = httpClient.execute(httpPost);

		return httpPostResponse;

	}
}
