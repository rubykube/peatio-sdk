# PeatioSdk.TradesApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Trades**](TradesApi.md#getV2Trades) | **GET** /trades | Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.
[**getV2TradesMy**](TradesApi.md#getV2TradesMy) | **GET** /trades/my | Get your executed trades. Trades are sorted in reverse creation order.


<a name="getV2Trades"></a>
# **getV2Trades**
> getV2Trades(market, opts)

Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.

Get recent trades on market, each trade is included only once. Trades are sorted in reverse creation order.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.TradesApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var opts = { 
  'limit': 50, // Number | Limit the number of returned trades. Default to 50.
  'timestamp': 56, // Number | An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
  'from': 56, // Number | Trade id. If set, only trades created after the trade will be returned.
  'to': 56, // Number | Trade id. If set, only trades created before the trade will be returned.
  'orderBy': "desc" // String | If set, returned trades will be sorted in specific order, default to 'desc'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Trades(market, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **limit** | **Number**| Limit the number of returned trades. Default to 50. | [optional] [default to 50]
 **timestamp** | **Number**| An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned. | [optional] 
 **from** | **Number**| Trade id. If set, only trades created after the trade will be returned. | [optional] 
 **to** | **Number**| Trade id. If set, only trades created before the trade will be returned. | [optional] 
 **orderBy** | **String**| If set, returned trades will be sorted in specific order, default to &#39;desc&#39;. | [optional] [default to desc]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getV2TradesMy"></a>
# **getV2TradesMy**
> getV2TradesMy(market, opts)

Get your executed trades. Trades are sorted in reverse creation order.

Get your executed trades. Trades are sorted in reverse creation order.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.TradesApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var opts = { 
  'limit': 50, // Number | Limit the number of returned trades. Default to 50.
  'timestamp': 56, // Number | An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned.
  'from': 56, // Number | Trade id. If set, only trades created after the trade will be returned.
  'to': 56, // Number | Trade id. If set, only trades created before the trade will be returned.
  'orderBy': "desc" // String | If set, returned trades will be sorted in specific order, default to 'desc'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2TradesMy(market, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **limit** | **Number**| Limit the number of returned trades. Default to 50. | [optional] [default to 50]
 **timestamp** | **Number**| An integer represents the seconds elapsed since Unix epoch. If set, only trades executed before the time will be returned. | [optional] 
 **from** | **Number**| Trade id. If set, only trades created after the trade will be returned. | [optional] 
 **to** | **Number**| Trade id. If set, only trades created before the trade will be returned. | [optional] 
 **orderBy** | **String**| If set, returned trades will be sorted in specific order, default to &#39;desc&#39;. | [optional] [default to desc]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

