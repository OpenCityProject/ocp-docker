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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Auth', 'model/Category', 'model/Error', 'model/Poi', 'model/PoiState', 'model/RecurrenceFrequency', 'model/Success', 'model/Tag', 'model/User', 'model/UserState', 'model/UserType', 'model/Weekday', 'api/PointOfInterestApi', 'api/RecurrenceApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Auth'), require('./model/Category'), require('./model/Error'), require('./model/Poi'), require('./model/PoiState'), require('./model/RecurrenceFrequency'), require('./model/Success'), require('./model/Tag'), require('./model/User'), require('./model/UserState'), require('./model/UserType'), require('./model/Weekday'), require('./api/PointOfInterestApi'), require('./api/RecurrenceApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Auth, Category, Error, Poi, PoiState, RecurrenceFrequency, Success, Tag, User, UserState, UserType, Weekday, PointOfInterestApi, RecurrenceApi, UserApi) {
  'use strict';

  /**
   * Interact_with_your_city_with_the_Open_City_Project_API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var OpenCityProjectApi = require('index'); // See note below*.
   * var xxxSvc = new OpenCityProjectApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new OpenCityProjectApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new OpenCityProjectApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new OpenCityProjectApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Auth model constructor.
     * @property {module:model/Auth}
     */
    Auth: Auth,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Poi model constructor.
     * @property {module:model/Poi}
     */
    Poi: Poi,
    /**
     * The PoiState model constructor.
     * @property {module:model/PoiState}
     */
    PoiState: PoiState,
    /**
     * The RecurrenceFrequency model constructor.
     * @property {module:model/RecurrenceFrequency}
     */
    RecurrenceFrequency: RecurrenceFrequency,
    /**
     * The Success model constructor.
     * @property {module:model/Success}
     */
    Success: Success,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserState model constructor.
     * @property {module:model/UserState}
     */
    UserState: UserState,
    /**
     * The UserType model constructor.
     * @property {module:model/UserType}
     */
    UserType: UserType,
    /**
     * The Weekday model constructor.
     * @property {module:model/Weekday}
     */
    Weekday: Weekday,
    /**
     * The PointOfInterestApi service constructor.
     * @property {module:api/PointOfInterestApi}
     */
    PointOfInterestApi: PointOfInterestApi,
    /**
     * The RecurrenceApi service constructor.
     * @property {module:api/RecurrenceApi}
     */
    RecurrenceApi: RecurrenceApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
