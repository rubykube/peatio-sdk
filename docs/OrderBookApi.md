# PeatioSdk.OrderBookApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2OrderBook**](OrderBookApi.md#getV2OrderBook) | **GET** /order_book | Get the order book of specified market.


<a name="getV2OrderBook"></a>
# **getV2OrderBook**
> getV2OrderBook(market, opts)

Get the order book of specified market.

Get the order book of specified market.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrderBookApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var opts = { 
  'asksLimit': 20, // Number | Limit the number of returned sell orders. Default to 20.
  'bidsLimit': 20 // Number | Limit the number of returned buy orders. Default to 20.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2OrderBook(market, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **asksLimit** | **Number**| Limit the number of returned sell orders. Default to 20. | [optional] [default to 20]
 **bidsLimit** | **Number**| Limit the number of returned buy orders. Default to 20. | [optional] [default to 20]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

