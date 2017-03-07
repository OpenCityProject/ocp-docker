# OpenCityProjectApi.PointOfInterestApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryGET**](PointOfInterestApi.md#categoryGET) | **GET** /category | Get Categories
[**categoryIdDELETE**](PointOfInterestApi.md#categoryIdDELETE) | **DELETE** /category/{id} | Delete a Category by ID
[**categoryIdPATCH**](PointOfInterestApi.md#categoryIdPATCH) | **PATCH** /category/{id} | Update a Category by ID
[**categoryPOST**](PointOfInterestApi.md#categoryPOST) | **POST** /category | Add a Category
[**loginPOST**](PointOfInterestApi.md#loginPOST) | **POST** /login | Login
[**poiAllGET**](PointOfInterestApi.md#poiAllGET) | **GET** /poi | Get Points of Interest
[**poiDELETE**](PointOfInterestApi.md#poiDELETE) | **DELETE** /poi/{poiId} | Remove Point of Interest by ID
[**poiGET**](PointOfInterestApi.md#poiGET) | **GET** /poi/{poiId} | Get Point of Interest by ID
[**poiGetByCategory**](PointOfInterestApi.md#poiGetByCategory) | **GET** /poi-by-category | Get Points of Interest By Category
[**poiPATCH**](PointOfInterestApi.md#poiPATCH) | **PATCH** /poi/{poiId} | Update Point of Interest
[**poiPOST**](PointOfInterestApi.md#poiPOST) | **POST** /poi | Add Point of Interest
[**poiStateAllGET**](PointOfInterestApi.md#poiStateAllGET) | **GET** /poi-state | Get POI state
[**tagGET**](PointOfInterestApi.md#tagGET) | **GET** /tag | Get Tags
[**tagIdDELETE**](PointOfInterestApi.md#tagIdDELETE) | **DELETE** /tag/{id} | Delete a Tag by ID
[**tagIdPATCH**](PointOfInterestApi.md#tagIdPATCH) | **PATCH** /tag/{id} | Update a Tag by ID
[**tagPOST**](PointOfInterestApi.md#tagPOST) | **POST** /tag | Add a Tag


<a name="categoryGET"></a>
# **categoryGET**
> [Category] categoryGET()

Get Categories

Returns an array of category.

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Category]**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoryIdDELETE"></a>
# **categoryIdDELETE**
> Success categoryIdDELETE(id)

Delete a Category by ID

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var id = "id_example"; // String | The ID of the Category


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryIdDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Category | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoryIdPATCH"></a>
# **categoryIdPATCH**
> Success categoryIdPATCH(id, name)

Update a Category by ID

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var id = "id_example"; // String | The ID of the Category

var name = "name_example"; // String | Value of the category


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryIdPATCH(id, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Category | 
 **name** | **String**| Value of the category | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="categoryPOST"></a>
# **categoryPOST**
> Success categoryPOST(name)

Add a Category

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var name = "name_example"; // String | Value of the category


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoryPOST(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Value of the category | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loginPOST"></a>
# **loginPOST**
> Success loginPOST(auth)

Login

Login. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var auth = new OpenCityProjectApi.Auth(); // Auth | Auth object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginPOST(auth, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **auth** | [**Auth**](Auth.md)| Auth object | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiAllGET"></a>
# **poiAllGET**
> [Poi] poiAllGET(lat, _long, opts)

Get Points of Interest

Returns information about the Points of Interest near your location. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var lat = 1.2; // Number | Latitude component of location.

var _long = 1.2; // Number | Longitude component of location.

var opts = { 
  'radiusInMetre': 5000 // Number | Search radius in metre, default to 5000 metre.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiAllGET(lat, _long, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude component of location. | 
 **_long** | **Number**| Longitude component of location. | 
 **radiusInMetre** | **Number**| Search radius in metre, default to 5000 metre. | [optional] [default to 5000]

### Return type

[**[Poi]**](Poi.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiDELETE"></a>
# **poiDELETE**
> Success poiDELETE(poiId)

Remove Point of Interest by ID

Delete a specific Point of Interest. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var poiId = "poiId_example"; // String | The id of the Point of Interest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiDELETE(poiId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poiId** | **String**| The id of the Point of Interest | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiGET"></a>
# **poiGET**
> Object poiGET(poiId)

Get Point of Interest by ID

Returns information about the specific Point of Interest. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var poiId = "poiId_example"; // String | The id of the Point of Interest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiGET(poiId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poiId** | **String**| The id of the Point of Interest | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiGetByCategory"></a>
# **poiGetByCategory**
> [Poi] poiGetByCategory(lat, _long, category, opts)

Get Points of Interest By Category

Returns information about the Points of Interest near your location. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var lat = 1.2; // Number | Latitude component of location.

var _long = 1.2; // Number | Longitude component of location.

var category = 56; // Number | Category of POIs to get

var opts = { 
  'radiusInMetre': 5000 // Number | Search radius in metre, default to 5000 metre.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiGetByCategory(lat, _long, category, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lat** | **Number**| Latitude component of location. | 
 **_long** | **Number**| Longitude component of location. | 
 **category** | **Number**| Category of POIs to get | 
 **radiusInMetre** | **Number**| Search radius in metre, default to 5000 metre. | [optional] [default to 5000]

### Return type

[**[Poi]**](Poi.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiPATCH"></a>
# **poiPATCH**
> Success poiPATCH(poiId, opts)

Update Point of Interest

Update a specific Point of Interest. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var poiId = "poiId_example"; // String | The id of the Point of Interest

var opts = { 
  'poi': new OpenCityProjectApi.Poi() // Poi | Point of Interest object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiPATCH(poiId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poiId** | **String**| The id of the Point of Interest | 
 **poi** | [**Poi**](Poi.md)| Point of Interest object | [optional] 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiPOST"></a>
# **poiPOST**
> Success poiPOST(poi)

Add Point of Interest

Upload a new Point of Interest. 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var poi = new OpenCityProjectApi.Poi(); // Poi | Point of Interest object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiPOST(poi, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **poi** | [**Poi**](Poi.md)| Point of Interest object | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="poiStateAllGET"></a>
# **poiStateAllGET**
> [PoiState] poiStateAllGET()

Get POI state

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiStateAllGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PoiState]**](PoiState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagGET"></a>
# **tagGET**
> [Tag] tagGET()

Get Tags

Returns an array of tag.

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagIdDELETE"></a>
# **tagIdDELETE**
> Success tagIdDELETE(id)

Delete a Tag by ID

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var id = "id_example"; // String | The ID of the Tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagIdDELETE(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Tag | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagIdPATCH"></a>
# **tagIdPATCH**
> Success tagIdPATCH(id, name)

Update a Tag by ID

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var id = "id_example"; // String | The ID of the Tag

var name = "name_example"; // String | Value of the tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagIdPATCH(id, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the Tag | 
 **name** | **String**| Value of the tag | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tagPOST"></a>
# **tagPOST**
> Success tagPOST(name)

Add a Tag

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.PointOfInterestApi();

var name = "name_example"; // String | Value of the tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagPOST(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Value of the tag | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

