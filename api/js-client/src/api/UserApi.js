/**
 * Open City Project API
 * Interact with your city with the Open City Project API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Success', 'model/User', 'model/UserState', 'model/UserType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Success'), require('../model/User'), require('../model/UserState'), require('../model/UserType'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenCityProjectApi) {
      root.OpenCityProjectApi = {};
    }
    root.OpenCityProjectApi.UserApi = factory(root.OpenCityProjectApi.ApiClient, root.OpenCityProjectApi.Error, root.OpenCityProjectApi.Success, root.OpenCityProjectApi.User, root.OpenCityProjectApi.UserState, root.OpenCityProjectApi.UserType);
  }
}(this, function(ApiClient, Error, Success, User, UserState, UserType) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userDELETE operation.
     * @callback module:api/UserApi~userDELETECallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove User
     * Delete User by ID 
     * @param {String} userId The ID of the user
     * @param {module:api/UserApi~userDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.userDELETE = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling userDELETE");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/users/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userGET operation.
     * @callback module:api/UserApi~userGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User
     * Get User by ID 
     * @param {String} userId The ID of the user
     * @param {module:api/UserApi~userGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.userGET = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling userGET");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPATCH operation.
     * @callback module:api/UserApi~userPATCHCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User
     * Update User by ID 
     * @param {String} userId The ID of the user
     * @param {module:model/User} user The User object
     * @param {module:api/UserApi~userPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.userPATCH = function(userId, user, callback) {
      var postBody = user;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling userPATCH");
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling userPATCH");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/users/{userId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPOST operation.
     * @callback module:api/UserApi~userPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Success} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new User
     * Return an array of all users 
     * @param {module:model/User} user User object
     * @param {module:api/UserApi~userPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Success}
     */
    this.userPOST = function(user, callback) {
      var postBody = user;

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw new Error("Missing the required parameter 'user' when calling userPOST");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Success;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userStateAllGET operation.
     * @callback module:api/UserApi~userStateAllGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserState>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User state
     * @param {module:api/UserApi~userStateAllGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserState>}
     */
    this.userStateAllGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [UserState];

      return this.apiClient.callApi(
        '/user-state', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userTypeAllGET operation.
     * @callback module:api/UserApi~userTypeAllGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User type
     * @param {module:api/UserApi~userTypeAllGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserType>}
     */
    this.userTypeAllGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [UserType];

      return this.apiClient.callApi(
        '/user-type', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usersAllGET operation.
     * @callback module:api/UserApi~usersAllGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Users
     * Return an array of all users 
     * @param {module:api/UserApi~usersAllGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */
    this.usersAllGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [User];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
