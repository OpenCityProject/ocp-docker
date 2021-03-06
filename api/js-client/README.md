# open_city_project_api

OpenCityProjectApi - JavaScript client for open_city_project_api
Interact with your city with the Open City Project API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install open_city_project_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/open_city_project_api
then install it via:

```shell
    npm install YOUR_USERNAME/open_city_project_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenCityProjectApi = require('open_city_project_api');

var api = new OpenCityProjectApi.PointOfInterestApi()

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.categoryGET(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenCityProjectApi.PointOfInterestApi* | [**categoryGET**](docs/PointOfInterestApi.md#categoryGET) | **GET** /category | Get Categories
*OpenCityProjectApi.PointOfInterestApi* | [**categoryIdDELETE**](docs/PointOfInterestApi.md#categoryIdDELETE) | **DELETE** /category/{id} | Delete a Category by ID
*OpenCityProjectApi.PointOfInterestApi* | [**categoryIdPATCH**](docs/PointOfInterestApi.md#categoryIdPATCH) | **PATCH** /category/{id} | Update a Category by ID
*OpenCityProjectApi.PointOfInterestApi* | [**categoryPOST**](docs/PointOfInterestApi.md#categoryPOST) | **POST** /category | Add a Category
*OpenCityProjectApi.PointOfInterestApi* | [**loginPOST**](docs/PointOfInterestApi.md#loginPOST) | **POST** /login | Login
*OpenCityProjectApi.PointOfInterestApi* | [**poiAllGET**](docs/PointOfInterestApi.md#poiAllGET) | **GET** /poi | Get Points of Interest
*OpenCityProjectApi.PointOfInterestApi* | [**poiDELETE**](docs/PointOfInterestApi.md#poiDELETE) | **DELETE** /poi/{poiId} | Remove Point of Interest by ID
*OpenCityProjectApi.PointOfInterestApi* | [**poiGET**](docs/PointOfInterestApi.md#poiGET) | **GET** /poi/{poiId} | Get Point of Interest by ID
*OpenCityProjectApi.PointOfInterestApi* | [**poiGetByCategory**](docs/PointOfInterestApi.md#poiGetByCategory) | **GET** /poi-by-category | Get Points of Interest By Category
*OpenCityProjectApi.PointOfInterestApi* | [**poiPATCH**](docs/PointOfInterestApi.md#poiPATCH) | **PATCH** /poi/{poiId} | Update Point of Interest
*OpenCityProjectApi.PointOfInterestApi* | [**poiPOST**](docs/PointOfInterestApi.md#poiPOST) | **POST** /poi | Add Point of Interest
*OpenCityProjectApi.PointOfInterestApi* | [**poiStateAllGET**](docs/PointOfInterestApi.md#poiStateAllGET) | **GET** /poi-state | Get POI state
*OpenCityProjectApi.PointOfInterestApi* | [**tagGET**](docs/PointOfInterestApi.md#tagGET) | **GET** /tag | Get Tags
*OpenCityProjectApi.PointOfInterestApi* | [**tagIdDELETE**](docs/PointOfInterestApi.md#tagIdDELETE) | **DELETE** /tag/{id} | Delete a Tag by ID
*OpenCityProjectApi.PointOfInterestApi* | [**tagIdPATCH**](docs/PointOfInterestApi.md#tagIdPATCH) | **PATCH** /tag/{id} | Update a Tag by ID
*OpenCityProjectApi.PointOfInterestApi* | [**tagPOST**](docs/PointOfInterestApi.md#tagPOST) | **POST** /tag | Add a Tag
*OpenCityProjectApi.RecurrenceApi* | [**recurrenceFrequencyAllGET**](docs/RecurrenceApi.md#recurrenceFrequencyAllGET) | **GET** /recurrence-frequency | Get Recurrence Frequency
*OpenCityProjectApi.RecurrenceApi* | [**weekdayAllGET**](docs/RecurrenceApi.md#weekdayAllGET) | **GET** /weekday | Get Weekday
*OpenCityProjectApi.UserApi* | [**userDELETE**](docs/UserApi.md#userDELETE) | **DELETE** /users/{userId} | Remove User
*OpenCityProjectApi.UserApi* | [**userGET**](docs/UserApi.md#userGET) | **GET** /users/{userId} | Get User
*OpenCityProjectApi.UserApi* | [**userPATCH**](docs/UserApi.md#userPATCH) | **PATCH** /users/{userId} | Update User
*OpenCityProjectApi.UserApi* | [**userPOST**](docs/UserApi.md#userPOST) | **POST** /users | Add a new User
*OpenCityProjectApi.UserApi* | [**userStateAllGET**](docs/UserApi.md#userStateAllGET) | **GET** /user-state | Get User state
*OpenCityProjectApi.UserApi* | [**userTypeAllGET**](docs/UserApi.md#userTypeAllGET) | **GET** /user-type | Get User type
*OpenCityProjectApi.UserApi* | [**usersAllGET**](docs/UserApi.md#usersAllGET) | **GET** /users | Get Users


## Documentation for Models

 - [OpenCityProjectApi.Auth](docs/Auth.md)
 - [OpenCityProjectApi.Category](docs/Category.md)
 - [OpenCityProjectApi.Error](docs/Error.md)
 - [OpenCityProjectApi.Poi](docs/Poi.md)
 - [OpenCityProjectApi.PoiState](docs/PoiState.md)
 - [OpenCityProjectApi.RecurrenceFrequency](docs/RecurrenceFrequency.md)
 - [OpenCityProjectApi.Success](docs/Success.md)
 - [OpenCityProjectApi.Tag](docs/Tag.md)
 - [OpenCityProjectApi.User](docs/User.md)
 - [OpenCityProjectApi.UserState](docs/UserState.md)
 - [OpenCityProjectApi.UserType](docs/UserType.md)
 - [OpenCityProjectApi.Weekday](docs/Weekday.md)


## Documentation for Authorization

 All endpoints do not require authorization.

