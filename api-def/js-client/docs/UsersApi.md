# OpenCityProjectApi.UsersApi

All URIs are relative to *https://api.opencityproject.nz/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Get Users
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Add User
[**usersUsernameDelete**](UsersApi.md#usersUsernameDelete) | **DELETE** /users/{username} | Remove User
[**usersUsernamePatch**](UsersApi.md#usersUsernamePatch) | **PATCH** /users/{username} | Update User


<a name="usersGet"></a>
# **usersGet**
> [User] usersGet()

Get Users

The users endpoint returns all users in the database 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> Success usersPost(poi)

Add User

The users endpoint to add another point of interest 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UsersApi();

var poi = new OpenCityProjectApi.POI(); // POI | Point of Interest object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersPost(poi, callback);
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

<a name="usersUsernameDelete"></a>
# **usersUsernameDelete**
> Success usersUsernameDelete(username)

Remove User

The user endpoint to remove User 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UsersApi();

var username = "username_example"; // String | The username of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUsernameDelete(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUsernamePatch"></a>
# **usersUsernamePatch**
> Success usersUsernamePatch(username)

Update User

The users endpoint to update point of interest 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UsersApi();

var username = "username_example"; // String | The username of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUsernamePatch(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The username of the user | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

