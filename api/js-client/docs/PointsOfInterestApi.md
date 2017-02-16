# OpenCityProjectApi.PointsOfInterestApi

All URIs are relative to *https://api.opencityproject.nz/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**poiGet**](PointsOfInterestApi.md#poiGet) | **GET** /poi | Get Points of Interest
[**poiPoiIdDelete**](PointsOfInterestApi.md#poiPoiIdDelete) | **DELETE** /poi/{poiId} | Remove Point of Interest
[**poiPoiIdPatch**](PointsOfInterestApi.md#poiPoiIdPatch) | **PATCH** /poi/{poiId} | Update Point of Interest
[**poiPost**](PointsOfInterestApi.md#poiPost) | **POST** /poi | Add Point of Interest


<a name="poiGet"></a>
# **poiGet**
> [POI] poiGet(lat, lng)

Get Points of Interest

The Points of Interest endpoint returns information about the Points of Interest near your location. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointsOfInterestApi();

var lat = 1.2; // Number | Latitude component of location.

var lng = 1.2; // Number | Longitude component of location.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiGet(lat, lng, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude component of location. | 
 **lng** | **Number**| Longitude component of location. | 

### Return type

[**[POI]**](POI.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="poiPoiIdDelete"></a>
# **poiPoiIdDelete**
> Success poiPoiIdDelete(poiId, opts)

Remove Point of Interest

The Points of Interest endpoint to remove point of interest 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointsOfInterestApi();

var poiId = "poiId_example"; // String | The id of the Point of Interest

var opts = { 
  'poi': new OpenCityProjectApi.POI() // POI | Point of Interest object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiPoiIdDelete(poiId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poiId** | **String**| The id of the Point of Interest | 
 **poi** | [**POI**](POI.md)| Point of Interest object | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="poiPoiIdPatch"></a>
# **poiPoiIdPatch**
> Success poiPoiIdPatch(poiId, opts)

Update Point of Interest

The Points of Interest endpoint to update point of interest 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointsOfInterestApi();

var poiId = "poiId_example"; // String | The id of the Point of Interest

var opts = { 
  'poi': new OpenCityProjectApi.POI() // POI | Point of Interest object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiPoiIdPatch(poiId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poiId** | **String**| The id of the Point of Interest | 
 **poi** | [**POI**](POI.md)| Point of Interest object | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="poiPost"></a>
# **poiPost**
> Success poiPost(poi)

Add Point of Interest

The Points of Interest endpoint to add another point of interest 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointsOfInterestApi();

var poi = new OpenCityProjectApi.POI(); // POI | Point of Interest object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiPost(poi, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poi** | [**POI**](POI.md)| Point of Interest object | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

