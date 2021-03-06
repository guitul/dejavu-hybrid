'use strict';

angular.module('dejavu.services', ['ngResource'])
.factory('bookmarkService', ['$resource', function($resource) {
    return $resource('https://dejavu-api.herokuapp.com/bookmarks/:id', {id:'@_id'} ,
    {
        update: {
            method: 'PUT'
        }
    });
}])
.factory('categoryService', ['$resource', function($resource) {
    return $resource('https://dejavu-api.herokuapp.com/categories/:id', {id:'@_id'} ,
    {
        update: {
            method: 'PUT'
        }
    });
}])
.factory('searchService', function () {
    return { input: '' };
});