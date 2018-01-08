# PeatioSdk.TimestampApi

All URIs are relative to *https://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Timestamp**](TimestampApi.md#getV2Timestamp) | **GET** /timestamp | Get server current time, in seconds since Unix epoch.


<a name="getV2Timestamp"></a>
# **getV2Timestamp**
> getV2Timestamp()

Get server current time, in seconds since Unix epoch.

Get server current time, in seconds since Unix epoch.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.TimestampApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Timestamp(callback);
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

