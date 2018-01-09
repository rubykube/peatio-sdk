# PeatioSdk.MembersApi

All URIs are relative to *http://localhost:8000/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2MembersMe**](MembersApi.md#getV2MembersMe) | **GET** /members/me | Get your profile and accounts info.


<a name="getV2MembersMe"></a>
# **getV2MembersMe**
> getV2MembersMe()

Get your profile and accounts info.

Get your profile and accounts info.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.MembersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2MembersMe(callback);
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

