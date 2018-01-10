# PeatioSdk.DepositApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2Deposit**](DepositApi.md#getV2Deposit) | **GET** /deposit | Get details of specific deposit.


<a name="getV2Deposit"></a>
# **getV2Deposit**
> getV2Deposit(txid)

Get details of specific deposit.

Get details of specific deposit.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.DepositApi();

var txid = "txid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2Deposit(txid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txid** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

