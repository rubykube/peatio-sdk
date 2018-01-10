# PeatioSdk.TimestampApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**timestamp**](TimestampApi.md#timestamp) | **GET** /timestamp | Get server current time, in seconds since Unix epoch.


<a name="timestamp"></a>
# **timestamp**
> &#39;Number&#39; timestamp()

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
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.timestamp(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

