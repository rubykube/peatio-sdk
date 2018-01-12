# PeatioSdk.MarketsApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Markets**](MarketsApi.md#getV2Markets) | **GET** /markets | Get all available markets.


<a name="getV2Markets"></a>
# **getV2Markets**
> [Market] getV2Markets()

Get all available markets.

Get all available markets.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');
var defaultClient = PeatioSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PeatioSdk.MarketsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV2Markets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Market]**](Market.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

