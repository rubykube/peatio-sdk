# PeatioSdk.KApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2K**](KApi.md#getV2K) | **GET** /k | Get OHLC(k line) of specific market.


<a name="getV2K"></a>
# **getV2K**
> getV2K(market, opts)

Get OHLC(k line) of specific market.

Get OHLC(k line) of specific market.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.KApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

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
apiInstance.getV2K(market, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
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

