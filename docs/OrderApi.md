# PeatioSdk.OrderApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Order**](OrderApi.md#getV2Order) | **GET** /order | Get information of specified order.
[**postV2OrderDelete**](OrderApi.md#postV2OrderDelete) | **POST** /order/delete | Cancel an order.


<a name="getV2Order"></a>
# **getV2Order**
> getV2Order(id)

Get information of specified order.

Get information of specified order.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrderApi();

var id = 56; // Number | Unique order id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Order(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Unique order id. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postV2OrderDelete"></a>
# **postV2OrderDelete**
> postV2OrderDelete(id)

Cancel an order.

Cancel an order.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.OrderApi();

var id = 56; // Number | Unique order id.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postV2OrderDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Unique order id. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

