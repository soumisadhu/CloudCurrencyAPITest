package com.data;

public class CurrencyConversionRequest {

	String buy_currency;
	String sell_currency;
	String fixed_side;
	int amount;
	boolean term_agreement;
	String reason;

	public CurrencyConversionRequest(String buy_currency, String sell_currency, String fixed_side, int amount,
			boolean term_agreement, String reason) {
		this.buy_currency = buy_currency;
		this.sell_currency = sell_currency;
		this.fixed_side = fixed_side;
		this.amount = amount;
		this.term_agreement = term_agreement;
		this.reason = reason;
	}

	public String getBuy_currency() {
		return buy_currency;
	}

	public void setBuy_currency(String buy_currency) {
		this.buy_currency = buy_currency;
	}

	public String getSell_currency() {
		return sell_currency;
	}

	public void setSell_currency(String sell_currency) {
		this.sell_currency = sell_currency;
	}

	public String getFixed_side() {
		return fixed_side;
	}

	public void setFixed_side(String fixed_side) {
		this.fixed_side = fixed_side;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public boolean isTerm_agreement() {
		return term_agreement;
	}

	public void setTerm_agreement(boolean term_agreement) {
		this.term_agreement = term_agreement;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	

	
}
