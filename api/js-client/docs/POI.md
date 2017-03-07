# OpenCityProjectApi.Poi

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier representing a specific point of interest for a given latitude &amp; longitude | [optional] 
**name** | **String** | The name of the Point of Interest | [optional] 
**gpsLat** | **String** | The latitude for the Point of Interest | [optional] 
**gpsLong** | **String** | The longitude for the Point of Interest | [optional] 
**locationPolygon** | **String** | The location polygon for the Point of Interest (currently unused) | [optional] 
**distanceInMetre** | **Number** | Distance from a given location, in metres | [optional] 
**startDate** | **Date** | The Start Time for the Point of Interest in ISO standard. Note: the actual date doesn&#39;t matter, only the time (hours and minutes) | [optional] 
**endDate** | **Date** | The End Time for the Point of Interest in ISO standard. Note: the actual date doesn&#39;t matter, only the time (hours and minutes) | [optional] 
**isAllDay** | **Boolean** | Indicates whether the Point of Interest takes place for the entire day | [optional] 
**poiUrl** | **String** | URL to an external website for the Point of Interest (currently unused) | [optional] 
**description** | **String** | Description of what makes the Point of Interest sweet | [optional] 
**isEveryDay** | **Boolean** | Whether or not the POI can be visited every day | [optional] 
**daysOfWeek** | **String** | Comma-separated string of numbers: eg. 1,2,3 for Mon, Tues, Wed | [optional] 
**categories** | **String** | A list of category_ids for the Point of Interest, deliminated by commas (Currently only supports a single category_id i.e. a single integer) | [optional] 
**tags** | **String** | A list of tags for the Point of Interest, deliminated by commas (current unused) | [optional] 


