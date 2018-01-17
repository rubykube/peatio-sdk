# PeatioSdk.MembersApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2MembersMe**](MembersApi.md#getV2MembersMe) | **GET** /members/me | Get your profile and accounts info.


<a name="getV2MembersMe"></a>
# **getV2MembersMe**
> Member getV2MembersMe()

Get your profile and accounts info.

Get your profile and accounts info.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');
var defaultClient = PeatioSdk.ApiClient.instance;

// Configure OAuth2 access token for authorization: jwt
var jwt = defaultClient.authentications['jwt'];
jwt.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new PeatioSdk.MembersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getV2MembersMe(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Member**](Member.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

