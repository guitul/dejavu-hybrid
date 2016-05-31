angular.module('dejavu.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, bookmarkService, userCategories, allCategories, filter) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.bookmark = {};
  $scope.userCategories = userCategories;
  $scope.allCategories = allCategories;
  $scope.search = filter;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.loginModal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  // Create the bookmark modal that we will use later
  $ionicModal.fromTemplateUrl('templates/bookmark.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.bookmarkModal = modal;
  });

  // Triggered in the bookmark modal to close it
  $scope.closeBookmark = function() {
    $scope.bookmarkModal.hide();
  };

  // Open the bookmark modal
  $scope.openBookmark = function() {
    $scope.bookmark = {};
    $scope.bookmarkModal.show();
  };

  $scope.editBookmark = function(bookmark) {
    $scope.bookmark = angular.copy(bookmark);
    $scope.bookmark.category = bookmark.category._id;
    $scope.bookmarkModal.show();
  }

  // Save the bookmark when the user submits the bookmark form
  $scope.saveBookmark = function() {
    if ($scope.bookmark._id) {
      bookmarkService.update($scope.bookmark);
    } else {
      bookmarkService.save($scope.bookmark);
    }
    $scope.closeBookmark();
    $state.reload();
  };

  $scope.getTotal = function() {
    var total = 0;
    for (var i = 0, j = $scope.userCategories.length; i < j; i++) {
      total += parseInt($scope.userCategories[i].count);
    }
    return total;
  }
})

.controller('BookmarksCtrl', function($scope, bookmarks, filter) {
    $scope.bookmarks = bookmarks;
    $scope.filter = filter;
})

.controller('CategoryCtrl', function($scope, bookmarks, category, filter) {
    $scope.bookmarks = bookmarks;
    $scope.category = category;
    $scope.filter = filter;

    $scope.updateBookmarks = function() {
      var categoryBookmarks = [];
      for (var i=0, j=$scope.bookmarks.length; i < j; i++) {
        if ($scope.bookmarks[i].category._id === $scope.category._id) {
          categoryBookmarks.push(bookmarks[i]);
        }
      }
      $scope.bookmarks = categoryBookmarks;
    };

    $scope.updateBookmarks();
});