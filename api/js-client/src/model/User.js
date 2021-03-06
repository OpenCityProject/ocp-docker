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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenCityProjectApi) {
      root.OpenCityProjectApi = {};
    }
    root.OpenCityProjectApi.User = factory(root.OpenCityProjectApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('oauth_provider')) {
        obj['oauth_provider'] = ApiClient.convertToType(data['oauth_provider'], 'String');
      }
      if (data.hasOwnProperty('oauth_token')) {
        obj['oauth_token'] = ApiClient.convertToType(data['oauth_token'], 'String');
      }
      if (data.hasOwnProperty('oauth_token_expiration')) {
        obj['oauth_token_expiration'] = ApiClient.convertToType(data['oauth_token_expiration'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Unique identifier representing a user
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the user
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The email address of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The phone number of the user
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Type of the user account
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * State of the user account
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
   * OAuth Provider if the user is SSO to the system
   * @member {String} oauth_provider
   */
  exports.prototype['oauth_provider'] = undefined;
  /**
   * SSO token retrieved from the OAuth Provider
   * @member {String} oauth_token
   */
  exports.prototype['oauth_token'] = undefined;
  /**
   * SSOExpiration date of the SSO token defined by the OAuth Provider
   * @member {Date} oauth_token_expiration
   */
  exports.prototype['oauth_token_expiration'] = undefined;



  return exports;
}));


