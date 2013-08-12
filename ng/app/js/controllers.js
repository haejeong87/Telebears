'use strict';

/* Controllers */

angular.module('rgbSong.controllers', []).
  controller('AppController', function($scope) {
    $scope.apiKey = "86c661e999f7198c25661648e66cd9c1";
    $scope.query = "";
    $scope.getUrl = function() {
      // Refer to http://tinysong.com/api
      return "http://tinysong.com/s/" + escape($scope.query) + "?format=json&limit=3&key=" + $scope.apiKey
    }
  })
