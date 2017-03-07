# OpenCityProjectApi.RecurrenceApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recurrenceFrequencyAllGET**](RecurrenceApi.md#recurrenceFrequencyAllGET) | **GET** /recurrence-frequency | Get Recurrence Frequency
[**weekdayAllGET**](RecurrenceApi.md#weekdayAllGET) | **GET** /weekday | Get Weekday


<a name="recurrenceFrequencyAllGET"></a>
# **recurrenceFrequencyAllGET**
> [RecurrenceFrequency] recurrenceFrequencyAllGET()

Get Recurrence Frequency

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.RecurrenceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recurrenceFrequencyAllGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[RecurrenceFrequency]**](RecurrenceFrequency.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="weekdayAllGET"></a>
# **weekdayAllGET**
> [Weekday] weekdayAllGET()

Get Weekday

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.RecurrenceApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.weekdayAllGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Weekday]**](Weekday.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

