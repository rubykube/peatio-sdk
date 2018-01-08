# PeatioSdk.OrdersApi

All URIs are relative to *https://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Orders**](OrdersApi.md#getV2Orders) | **GET** /orders | Get your orders, results is paginated.
[**postV2Orders**](OrdersApi.md#postV2Orders) | **POST** /orders | Create a Sell/Buy order.
[**postV2OrdersClear**](OrdersApi.md#postV2OrdersClear) | **POST** /orders/clear | Cancel all my orders.
[**postV2OrdersMulti**](OrdersApi.md#postV2OrdersMulti) | **POST** /orders/multi | Create multiple sell/buy orders.


<a name="getV2Orders"></a>
# **getV2Orders**
> getV2Orders(market, opts)

Get your orders, results is paginated.

Get your orders, results is paginated.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrdersApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var opts = { 
  'state': "wait", // String | Filter order by state, default to 'wait' (active orders).
  'limit': 100, // Number | Limit the number of returned orders, default to 100.
  'page': 1, // Number | Specify the page of paginated results.
  'orderBy': "asc" // String | If set, returned orders will be sorted in specific order, default to 'asc'.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Orders(market, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **state** | **String**| Filter order by state, default to &#39;wait&#39; (active orders). | [optional] [default to wait]
 **limit** | **Number**| Limit the number of returned orders, default to 100. | [optional] [default to 100]
 **page** | **Number**| Specify the page of paginated results. | [optional] [default to 1]
 **orderBy** | **String**| If set, returned orders will be sorted in specific order, default to &#39;asc&#39;. | [optional] [default to asc]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postV2Orders"></a>
# **postV2Orders**
> postV2Orders(market, side, volume, opts)

Create a Sell/Buy order.

Create a Sell/Buy order.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrdersApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var side = "side_example"; // String | Either 'sell' or 'buy'.

var volume = "volume_example"; // String | The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'.

var opts = { 
  'price': "price_example", // String | Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 USD, the price is '3000.0'
  'ordType': "ordType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postV2Orders(market, side, volume, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **side** | **String**| Either &#39;sell&#39; or &#39;buy&#39;. | 
 **volume** | **String**| The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order&#39;s volume would be &#39;5.0&#39;, its remaining_volume would be &#39;2.0&#39;, its executed volume is &#39;3.0&#39;. | 
 **price** | **String**| Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 USD, the price is &#39;3000.0&#39; | [optional] 
 **ordType** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postV2OrdersClear"></a>
# **postV2OrdersClear**
> postV2OrdersClear(opts)

Cancel all my orders.

Cancel all my orders.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrdersApi();

var opts = { 
  'side': "side_example" // String | If present, only sell orders (asks) or buy orders (bids) will be canncelled.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postV2OrdersClear(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **side** | **String**| If present, only sell orders (asks) or buy orders (bids) will be canncelled. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postV2OrdersMulti"></a>
# **postV2OrdersMulti**
> postV2OrdersMulti(market, ordersSide, ordersVolume, opts)

Create multiple sell/buy orders.

Create multiple sell/buy orders.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrdersApi();

var market = "market_example"; // String | Unique market id. It's always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. 'btcusd'. All available markets can be found at /api/markets.

var ordersSide = ["ordersSide_example"]; // [String] | Either 'sell' or 'buy'.

var ordersVolume = ["ordersVolume_example"]; // [String] | The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order's volume would be '5.0', its remaining_volume would be '2.0', its executed volume is '3.0'.

var opts = { 
  'ordersPrice': ["ordersPrice_example"], // [String] | Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 USD, the price is '3000.0'
  'ordersOrdType': ["ordersOrdType_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postV2OrdersMulti(market, ordersSide, ordersVolume, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **market** | **String**| Unique market id. It&#39;s always in the form of xxxyyy, where xxx is the base currency code, yyy is the quote currency code, e.g. &#39;btcusd&#39;. All available markets can be found at /api/markets. | 
 **ordersSide** | [**[String]**](String.md)| Either &#39;sell&#39; or &#39;buy&#39;. | 
 **ordersVolume** | [**[String]**](String.md)| The amount user want to sell/buy. An order could be partially executed, e.g. an order sell 5 btc can be matched with a buy 3 btc order, left 2 btc to be sold; in this case the order&#39;s volume would be &#39;5.0&#39;, its remaining_volume would be &#39;2.0&#39;, its executed volume is &#39;3.0&#39;. | 
 **ordersPrice** | [**[String]**](String.md)| Price for each unit. e.g. If you want to sell/buy 1 btc at 3000 USD, the price is &#39;3000.0&#39; | [optional] 
 **ordersOrdType** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

