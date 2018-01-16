# PeatioSdk.TickersApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Tickers**](TickersApi.md#getV2Tickers) | **GET** /tickers | Get ticker of all markets.
[**getV2TickersMarket**](TickersApi.md#getV2TickersMarket) | **GET** /tickers/{market} | Get ticker of specific market.


<a name="getV2Tickers"></a>
# **getV2Tickers**
> {&#39;String&#39;: TickerInfo} getV2Tickers()

Get ticker of all markets.

Get ticker of all markets.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');
var defaultClient = PeatioSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PeatioSdk.TickersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV2Tickers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**{&#39;String&#39;: TickerInfo}**](TickerInfo.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV2TickersMarket"></a>
# **getV2TickersMarket**
> TickerInfo getV2TickersMarket(market)

Get ticker of specific market.

Get ticker of specific market.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');
var defaultClient = PeatioSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PeatioSdk.TickersApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV2TickersMarket(market, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 

### Return type

[**TickerInfo**](TickerInfo.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

