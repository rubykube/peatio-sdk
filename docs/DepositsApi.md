# PeatioSdk.DepositsApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Deposits**](DepositsApi.md#getV2Deposits) | **GET** /deposits | Get your deposits history.


<a name="getV2Deposits"></a>
# **getV2Deposits**
> getV2Deposits(opts)

Get your deposits history.

Get your deposits history.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');
var defaultClient = PeatioSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PeatioSdk.DepositsApi();

var opts = { 
  'currency': "currency_example", // String | Currency value contains  usd,btc,xrp
  'limit': 3, // Number | Set result limit.
  'state': "state_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Deposits(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| Currency value contains  usd,btc,xrp | [optional] 
 **limit** | **Number**| Set result limit. | [optional] [default to 3]
 **state** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

