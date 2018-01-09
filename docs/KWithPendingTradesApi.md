# PeatioSdk.KWithPendingTradesApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2KWithPendingTrades**](KWithPendingTradesApi.md#getV2KWithPendingTrades) | **GET** /k_with_pending_trades | Get K data with pending trades, which are the trades not included in K data yet, because there&#39;s delay between trade generated and processed by K data generator.


<a name="getV2KWithPendingTrades"></a>
# **getV2KWithPendingTrades**
> getV2KWithPendingTrades(market, tradeId, opts)

Get K data with pending trades, which are the trades not included in K data yet, because there&#39;s delay between trade generated and processed by K data generator.

Get K data with pending trades, which are the trades not included in K data yet, because there&#39;s delay between trade generated and processed by K data generator.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.KWithPendingTradesApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var tradeId = 56; // Number | The trade id of the first trade you received.

var opts = { 
  'limit': 30, // Number | Limit the number of returned data points, default to 30.
  'period': 1, // Number | Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080
  'timestamp': 56 // Number | An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2KWithPendingTrades(market, tradeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **tradeId** | **Number**| The trade id of the first trade you received. | 
 **limit** | **Number**| Limit the number of returned data points, default to 30. | [optional] [default to 30]
 **period** | **Number**| Time period of K line, default to 1. You can choose between 1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080 | [optional] [default to 1]
 **timestamp** | **Number**| An integer represents the seconds elapsed since Unix epoch. If set, only k-line data after that time will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

