'use strict';

/**
 * @ngdoc function
 * @name InsorumWebsiteApp.controller:WhitelistCtrl
 * @description
 * # WhitelistCtrl
 * Controller in InsorumWebsite
 */
angular.module('InsorumWebsiteApp')
    .controller('WhitelistCtrl', function ($scope, $http) {

        $scope.fetchingStatus = 'in progress';

        $http.get('/data/whitelist.json').success(function(data) {
            $scope.whitelist = data;
            $scope.fetchingStatus = 'complete';
        }).error(function() {
            $scope.fetchingStatus = 'failed';
        });
    });
