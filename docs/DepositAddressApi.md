# PeatioSdk.DepositAddressApi

All URIs are relative to *http://demo.peatio.tech/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV2DepositAddress**](DepositAddressApi.md#getV2DepositAddress) | **GET** /deposit_address | Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.


<a name="getV2DepositAddress"></a>
# **getV2DepositAddress**
> getV2DepositAddress(currency)

Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.

Where to deposit. The address field could be empty when a new address is generating (e.g. for bitcoin), you should try again later in that case.

### Example
```javascript
var PeatioSdk = require('peatio-sdk');

var apiInstance = new PeatioSdk.DepositAddressApi();

var currency = "currency_example"; // String | The account to which you want to deposit. Available values: usd, btc, xrp


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getV2DepositAddress(currency, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currency** | **String**| The account to which you want to deposit. Available values: usd, btc, xrp | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

