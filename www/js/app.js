// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('dejavu', ['ionic', 'dejavu.controllers', 'dejavu.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl',
    resolve: {
      allCategories: ['categoryService', function(categoryService) {
        return categoryService.query();
      }],
      userCategories: ['bookmarkService', function(bookmarkService) {
        var categories = [];
        var bookmarks = bookmarkService.query({}, function() {
          var counts = {};
          var id = '';
          for (var i = 0, j = bookmarks.length; i < j; i++) {
            id = bookmarks[i].category._id;
            if (counts[id]) {
              counts[id]++;
            } else {
              counts[id] = 1;
              categories.push(bookmarks[i].category);
            }
          }
          for (var i = 0, j = categories.length; i < j; i++) {
            categories[i].count = counts[categories[i]._id];
          }
        });
        return categories;
      }],
      filter: ['searchService', function(searchService) {
        return searchService;
      }]
    }
  })
  .state('app.bookmarks', {
      url: '/bookmarks',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookmarks.html',
          controller: 'BookmarksCtrl',
          resolve: {
              bookmarks: ['bookmarkService', function(bookmarkService) {
                return bookmarkService.query();
              }],
              filter: ['searchService', function(searchService) {
                return searchService;
              }]
          }
        }
      }
  })
  .state('app.category', {
      url: '/category/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookmarks.html',
          controller: 'CategoryCtrl',
          resolve: {
              bookmarks: ['bookmarkService', function(bookmarkService) {
                return bookmarkService.query({}).$promise;
              }],
              category: ['$stateParams', 'categoryService', function($stateParams, categoryService) {
                return categoryService.get({id: $stateParams.id}).$promise;
              }],
              filter: ['searchService', function(searchService) {
                return searchService;
              }]
          }
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/bookmarks');
});
