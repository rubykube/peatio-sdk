# PeatioSdk.MarketsApi

All URIs are relative to *http://localhost:8000/api/v2*

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
var PeatioSdk = require('peatio-sdk');
var defaultClient = PeatioSdk.ApiClient.instance;

// Configure API key authorization: api_key
var api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: peatio_auth
var peatio_auth = defaultClient.authentications['peatio_auth'];
peatio_auth.accessToken = 'YOUR ACCESS TOKEN';

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

[api_key](../README.md#api_key), [peatio_auth](../README.md#peatio_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

