'use strict';

/**
 * @ngdoc function
 * @name InsorumWebsiteApp.controller:HomepageCtrl
 * @description
 * # HomepageCtrl
 * Controller in InsorumWebsite
 */
angular.module('InsorumWebsiteApp')
    .controller('HomepageCtrl', function ($scope, $http) {

        $scope.scriptName = 'Homepage.js';
        $scope.appName = 'InsorumWebsite';

        $scope.me = {
            'name': 'Loading...',
            'age': 'Loading...'
        };

        $http.get('/api/default').success(function (val) {
            $scope.me = val;
        });
    });
