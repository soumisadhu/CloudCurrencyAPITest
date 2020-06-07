$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/Selenium/SeleniumTestNGConcept/BDDScenarioContextProject/src/test/java/Features/CloudCurrencyAPITestFeature.feature");
formatter.feature({
  "line": 1,
  "name": "CloudCurrencyAPITestFeature.feature",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate auth token and create conversion",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;validate-auth-token-and-create-conversion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I create conversion with \"\u003cbuy_currency\u003e\" \"\u003csell_currency\u003e\" \u003camount\u003e \"\u003cfixed_side\u003e\" \"\u003creason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Validate the response code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I validate amount is 2241",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;validate-auth-token-and-create-conversion;",
  "rows": [
    {
      "cells": [
        "buy_currency",
        "sell_currency",
        "amount",
        "fixed_side",
        "reason"
      ],
      "line": 13,
      "id": "cloudcurrencyapitestfeature.feature;validate-auth-token-and-create-conversion;;1"
    },
    {
      "cells": [
        "USD",
        "GBP",
        "1500",
        "sell",
        "test"
      ],
      "line": 14,
      "id": "cloudcurrencyapitestfeature.feature;validate-auth-token-and-create-conversion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Validate auth token and create conversion",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;validate-auth-token-and-create-conversion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I create conversion with \"USD\" \"GBP\" 1500 \"sell\" \"test\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Validate the response code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I validate amount is 2241",
  "keyword": "And "
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_generate_auth_token()"
});
formatter.result({
  "duration": 195234764,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_generate_auth_token_using_valid_userid_and_api_key()"
});
formatter.result({
  "duration": 2941566129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_auth_token_is_generated(int)"
});
formatter.result({
  "duration": 3883275,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_create_conversion()"
});
formatter.result({
  "duration": 82110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USD",
      "offset": 26
    },
    {
      "val": "GBP",
      "offset": 32
    },
    {
      "val": "1500",
      "offset": 37
    },
    {
      "val": "sell",
      "offset": 43
    },
    {
      "val": "test",
      "offset": 50
    }
  ],
  "location": "APITestSteps.i_create_conversion_with(String,String,int,String,String)"
});
formatter.result({
  "duration": 545315052,
  "error_message": "org.json.JSONException: JSONObject[\"client_buy_amount\"] not found.\r\n\tat org.json.JSONObject.get(JSONObject.java:572)\r\n\tat com.util.TestUtil.getValueByJPath(TestUtil.java:13)\r\n\tat com.tests.MakeCurrencyConversionApiTest.makeCurrencyConversion(MakeCurrencyConversionApiTest.java:56)\r\n\tat stepDefinitions.APITestSteps.i_create_conversion_with(APITestSteps.java:58)\r\n\tat ✽.And I create conversion with \"USD\" \"GBP\" 1500 \"sell\" \"test\"(D:/Selenium/SeleniumTestNGConcept/BDDScenarioContextProject/src/test/java/Features/CloudCurrencyAPITestFeature.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_creation_quote_is_failed_with(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2241",
      "offset": 21
    }
  ],
  "location": "APITestSteps.i_validate_amount_is(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Negative scenario to make  conversion without sell_currency",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-sell-currency",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Without \"\u003cmissingParameter\u003e\" create conversion with \"\u003cbuy_currency\u003e\" \"\u003csell_currency\u003e\" \u003camount\u003e \"\u003cfixed_side\u003e\" \"\u003creason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I Validate message is \"sell_currency is not a valid ISO 4217 currency code\"",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-sell-currency;",
  "rows": [
    {
      "cells": [
        "missingParameter",
        "buy_currency",
        "sell_currency",
        "amount",
        "fixed_side",
        "reason"
      ],
      "line": 27,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-sell-currency;;1"
    },
    {
      "cells": [
        "sell_currency",
        "USD",
        "",
        "1500",
        "sell",
        "test"
      ],
      "line": 28,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-sell-currency;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Negative scenario to make  conversion without sell_currency",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-sell-currency;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Without \"sell_currency\" create conversion with \"USD\" \"\" 1500 \"sell\" \"test\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I Validate message is \"sell_currency is not a valid ISO 4217 currency code\"",
  "keyword": "And "
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_generate_auth_token()"
});
formatter.result({
  "duration": 1295794,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_generate_auth_token_using_valid_userid_and_api_key()"
});
formatter.result({
  "duration": 1620582435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_auth_token_is_generated(int)"
});
formatter.result({
  "duration": 203222,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_create_conversion()"
});
formatter.result({
  "duration": 93400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sell_currency",
      "offset": 9
    },
    {
      "val": "USD",
      "offset": 48
    },
    {
      "val": "",
      "offset": 54
    },
    {
      "val": "1500",
      "offset": 56
    },
    {
      "val": "sell",
      "offset": 62
    },
    {
      "val": "test",
      "offset": 69
    }
  ],
  "location": "APITestSteps.without_create_conversion_with(String,String,String,int,String,String)"
});
formatter.result({
  "duration": 678586256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_creation_quote_is_failed_with(int)"
});
formatter.result({
  "duration": 216564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sell_currency is not a valid ISO 4217 currency code",
      "offset": 23
    }
  ],
  "location": "APITestSteps.i_Validate_message_is(String)"
});
formatter.result({
  "duration": 184747,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Negative scenario to make  conversion without buy_currency",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-buy-currency",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Without \"\u003cmissingParameter\u003e\" create conversion with \"\u003cbuy_currency\u003e\" \"\u003csell_currency\u003e\" \u003camount\u003e \"\u003cfixed_side\u003e\" \"\u003creason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I Validate message is \"buy_currency is not a valid ISO 4217 currency code\"",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-buy-currency;",
  "rows": [
    {
      "cells": [
        "missingParameter",
        "buy_currency",
        "sell_currency",
        "amount",
        "fixed_side",
        "reason"
      ],
      "line": 40,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-buy-currency;;1"
    },
    {
      "cells": [
        "buy_currency",
        "",
        "GBP",
        "1500",
        "sell",
        "test"
      ],
      "line": 41,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-buy-currency;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Negative scenario to make  conversion without buy_currency",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-buy-currency;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Without \"buy_currency\" create conversion with \"\" \"GBP\" 1500 \"sell\" \"test\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I Validate message is \"buy_currency is not a valid ISO 4217 currency code\"",
  "keyword": "And "
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_generate_auth_token()"
});
formatter.result({
  "duration": 1034069,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_generate_auth_token_using_valid_userid_and_api_key()"
});
formatter.result({
  "duration": 1574474254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_auth_token_is_generated(int)"
});
formatter.result({
  "duration": 242223,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_create_conversion()"
});
formatter.result({
  "duration": 64148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy_currency",
      "offset": 9
    },
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "GBP",
      "offset": 50
    },
    {
      "val": "1500",
      "offset": 55
    },
    {
      "val": "sell",
      "offset": 61
    },
    {
      "val": "test",
      "offset": 68
    }
  ],
  "location": "APITestSteps.without_create_conversion_with(String,String,String,int,String,String)"
});
formatter.result({
  "duration": 304053704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_creation_quote_is_failed_with(int)"
});
formatter.result({
  "duration": 175509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy_currency is not a valid ISO 4217 currency code",
      "offset": 23
    }
  ],
  "location": "APITestSteps.i_Validate_message_is(String)"
});
formatter.result({
  "duration": 84163,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Negative scenario to make  conversion without fixed side",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-fixed-side",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Without \"\u003cmissingParameter\u003e\" create conversion with \"\u003cbuy_currency\u003e\" \"\u003csell_currency\u003e\" \u003camount\u003e \"\u003cfixed_side\u003e\" \"\u003creason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I Validate message is \"fixed_side should be in range: buy, sell\"",
  "keyword": "And "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-fixed-side;",
  "rows": [
    {
      "cells": [
        "missingParameter",
        "buy_currency",
        "sell_currency",
        "amount",
        "fixed_side",
        "reason"
      ],
      "line": 54,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-fixed-side;;1"
    },
    {
      "cells": [
        "fixed_side",
        "USD",
        "GBP",
        "1500",
        "",
        "test"
      ],
      "line": 55,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-fixed-side;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 55,
  "name": "Negative scenario to make  conversion without fixed side",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-fixed-side;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "Without \"fixed_side\" create conversion with \"USD\" \"GBP\" 1500 \"\" \"test\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I Validate message is \"fixed_side should be in range: buy, sell\"",
  "keyword": "And "
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_generate_auth_token()"
});
formatter.result({
  "duration": 1106941,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_generate_auth_token_using_valid_userid_and_api_key()"
});
formatter.result({
  "duration": 1550266779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_auth_token_is_generated(int)"
});
formatter.result({
  "duration": 139587,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_create_conversion()"
});
formatter.result({
  "duration": 89294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fixed_side",
      "offset": 9
    },
    {
      "val": "USD",
      "offset": 45
    },
    {
      "val": "GBP",
      "offset": 51
    },
    {
      "val": "1500",
      "offset": 56
    },
    {
      "val": "",
      "offset": 62
    },
    {
      "val": "test",
      "offset": 65
    }
  ],
  "location": "APITestSteps.without_create_conversion_with(String,String,String,int,String,String)"
});
formatter.result({
  "duration": 332018210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_creation_quote_is_failed_with(int)"
});
formatter.result({
  "duration": 184233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fixed_side should be in range: buy, sell",
      "offset": 23
    }
  ],
  "location": "APITestSteps.i_Validate_message_is(String)"
});
formatter.result({
  "duration": 138046,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Negative scenario to make  conversion without amount",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-amount",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Without \"\u003cmissingParameter\u003e\" create conversion with \"\u003cbuy_currency\u003e\" \"\u003csell_currency\u003e\" \u003camount\u003e \"\u003cfixed_side\u003e\" \"\u003creason\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I Validate message is \"The amount can not be negative or zero\"",
  "keyword": "And "
});
formatter.examples({
  "line": 66,
  "name": "",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-amount;",
  "rows": [
    {
      "cells": [
        "missingParameter",
        "buy_currency",
        "sell_currency",
        "amount",
        "fixed_side",
        "reason"
      ],
      "line": 67,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-amount;;1"
    },
    {
      "cells": [
        "amount",
        "USD",
        "GBP",
        "0",
        "sell",
        "test"
      ],
      "line": 68,
      "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-amount;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
  "name": "Negative scenario to make  conversion without amount",
  "description": "",
  "id": "cloudcurrencyapitestfeature.feature;negative-scenario-to-make--conversion-without-amount;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I setup the url for generate auth token",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I generate auth token using valid userid and api key",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "I Validate the response code is 200 and auth token is generated",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I setup the url for create conversion",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "Without \"amount\" create conversion with \"USD\" \"GBP\" 0 \"sell\" \"test\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I Validate the response code is 400",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I Validate message is \"The amount can not be negative or zero\"",
  "keyword": "And "
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_generate_auth_token()"
});
formatter.result({
  "duration": 2497161,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_generate_auth_token_using_valid_userid_and_api_key()"
});
formatter.result({
  "duration": 1573781454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_auth_token_is_generated(int)"
});
formatter.result({
  "duration": 275581,
  "status": "passed"
});
formatter.match({
  "location": "APITestSteps.i_setup_the_url_for_create_conversion()"
});
formatter.result({
  "duration": 64149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amount",
      "offset": 9
    },
    {
      "val": "USD",
      "offset": 41
    },
    {
      "val": "GBP",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 52
    },
    {
      "val": "sell",
      "offset": 55
    },
    {
      "val": "test",
      "offset": 62
    }
  ],
  "location": "APITestSteps.without_create_conversion_with(String,String,String,int,String,String)"
});
formatter.result({
  "duration": 416561934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 32
    }
  ],
  "location": "APITestSteps.i_Validate_the_response_code_is_and_creation_quote_is_failed_with(int)"
});
formatter.result({
  "duration": 125217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The amount can not be negative or zero",
      "offset": 23
    }
  ],
  "location": "APITestSteps.i_Validate_message_is(String)"
});
formatter.result({
  "duration": 93913,
  "status": "passed"
});
});