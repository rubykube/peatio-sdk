# PeatioSdk.DepthApi

All URIs are relative to *https://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Depth**](DepthApi.md#getV2Depth) | **GET** /depth | Get depth or specified market. Both asks and bids are sorted from highest price to lowest.


<a name="getV2Depth"></a>
# **getV2Depth**
> getV2Depth(market, opts)

Get depth or specified market. Both asks and bids are sorted from highest price to lowest.

Get depth or specified market. Both asks and bids are sorted from highest price to lowest.

### Example
```javascript
var PeatioSdk = require('peatio_sdk');

var apiInstance = new PeatioSdk.DepthApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var opts = { 
  'limit': 300 // Number | Limit the number of returned price levels. Default to 300.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Depth(market, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **limit** | **Number**| Limit the number of returned price levels. Default to 300. | [optional] [default to 300]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

