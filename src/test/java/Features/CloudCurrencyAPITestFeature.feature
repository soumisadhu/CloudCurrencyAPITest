Feature: CloudCurrencyAPITestFeature.feature

Scenario Outline: Validate auth token and create conversion 
When I setup the url for generate auth token
When I generate auth token using valid userid and api key
Then I Validate the response code is 200 and auth token is generated	
When I setup the url for create conversion 
And I create conversion with "<buy_currency>" "<sell_currency>" <amount> "<fixed_side>" "<reason>"
Then I Validate the response code is 200
And I validate amount is "2111.85"

Examples: 
|buy_currency|sell_currency|amount|fixed_side|reason|
|  USD       |     GBP     |1500  |sell      | test |


Scenario Outline: Negative scenario to make  conversion without sell_currency
When I setup the url for generate auth token
When I generate auth token using valid userid and api key
Then I Validate the response code is 200 and auth token is generated	
When I setup the url for create conversion 
And Without "<missingParameter>" create conversion with "<buy_currency>" "<sell_currency>" <amount> "<fixed_side>" "<reason>"
Then I Validate the response code is 400
And I Validate message is "sell_currency is not a valid ISO 4217 currency code"

Examples: 
|missingParameter|buy_currency|sell_currency|amount|fixed_side|reason|
|sell_currency   |  USD       |             |1500  |sell      | test |

Scenario Outline: Negative scenario to make  conversion without buy_currency
When I setup the url for generate auth token
When I generate auth token using valid userid and api key
Then I Validate the response code is 200 and auth token is generated	
When I setup the url for create conversion 
And Without "<missingParameter>" create conversion with "<buy_currency>" "<sell_currency>" <amount> "<fixed_side>" "<reason>"
Then I Validate the response code is 400
And I Validate message is "buy_currency is not a valid ISO 4217 currency code"

Examples: 
|missingParameter|buy_currency|sell_currency|amount|fixed_side|reason|
|buy_currency    |            |GBP          |1500  |sell      | test |


Scenario Outline: Negative scenario to make  conversion without fixed side
When I setup the url for generate auth token
When I generate auth token using valid userid and api key
Then I Validate the response code is 200 and auth token is generated	
When I setup the url for create conversion 
And Without "<missingParameter>" create conversion with "<buy_currency>" "<sell_currency>" <amount> "<fixed_side>" "<reason>"
Then I Validate the response code is 400
And I Validate message is "fixed_side should be in range: buy, sell"

Examples: 
|missingParameter|buy_currency|sell_currency|amount|fixed_side|reason|
|fixed_side      |  USD       |GBP          |1500  |          | test |

Scenario Outline: Negative scenario to make  conversion without amount
When I setup the url for generate auth token
When I generate auth token using valid userid and api key
Then I Validate the response code is 200 and auth token is generated	
When I setup the url for create conversion 
And Without "<missingParameter>" create conversion with "<buy_currency>" "<sell_currency>" <amount> "<fixed_side>" "<reason>"
Then I Validate the response code is 400
And I Validate message is "The amount can not be negative or zero"

Examples: 
|missingParameter|buy_currency|sell_currency|amount|fixed_side|reason|
|amount          |  USD       |GBP          |   0   | sell     | test |