# PeatioSdk.MarketsApi

All URIs are relative to *https://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Markets**](MarketsApi.md#getV2Markets) | **GET** /markets | Get all available markets.


<a name="getV2Markets"></a>
# **getV2Markets**
> getV2Markets()

Get all available markets.

Get all available markets.

### Example
```javascript
var PeatioSdk = require('peatio_sdk');

var apiInstance = new PeatioSdk.MarketsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Markets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

