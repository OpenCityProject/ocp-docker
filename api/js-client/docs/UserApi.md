# OpenCityProjectApi.UserApi

All URIs are relative to *http://localhost:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userDELETE**](UserApi.md#userDELETE) | **DELETE** /users/{userId} | Remove User
[**userGET**](UserApi.md#userGET) | **GET** /users/{userId} | Get User
[**userPATCH**](UserApi.md#userPATCH) | **PATCH** /users/{userId} | Update User
[**userPOST**](UserApi.md#userPOST) | **POST** /users | Add a new User
[**userStateAllGET**](UserApi.md#userStateAllGET) | **GET** /user-state | Get User state
[**userTypeAllGET**](UserApi.md#userTypeAllGET) | **GET** /user-type | Get User type
[**usersAllGET**](UserApi.md#usersAllGET) | **GET** /users | Get Users


<a name="userDELETE"></a>
# **userDELETE**
> Success userDELETE(userId)

Remove User

Delete User by ID 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var userId = "userId_example"; // String | The ID of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userDELETE(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The ID of the user | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userGET"></a>
# **userGET**
> Success userGET(userId)

Get User

Get User by ID 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var userId = "userId_example"; // String | The ID of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userGET(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The ID of the user | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userPATCH"></a>
# **userPATCH**
> Success userPATCH(userId, user)

Update User

Update User by ID 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var userId = "userId_example"; // String | The ID of the user

var user = new OpenCityProjectApi.User(); // User | The User object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPATCH(userId, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| The ID of the user | 
 **user** | [**User**](User.md)| The User object | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userPOST"></a>
# **userPOST**
> Success userPOST(user)

Add a new User

Return an array of all users 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var user = new OpenCityProjectApi.User(); // User | User object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userPOST(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User object | 

### Return type

[**Success**](Success.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userStateAllGET"></a>
# **userStateAllGET**
> [UserState] userStateAllGET()

Get User state

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userStateAllGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[UserState]**](UserState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="userTypeAllGET"></a>
# **userTypeAllGET**
> [UserType] userTypeAllGET()

Get User type

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.userTypeAllGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[UserType]**](UserType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersAllGET"></a>
# **usersAllGET**
> [User] usersAllGET()

Get Users

Return an array of all users 

### Example
```javascript
var OpenCityProjectApi = require('open_city_project_api');

var apiInstance = new OpenCityProjectApi.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersAllGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

