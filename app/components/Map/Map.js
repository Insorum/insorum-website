'use strict';

/**
 * @ngdoc function
 * @name InsorumWebsiteApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller in InsorumWebsite
 */
angular.module('InsorumWebsiteApp')
    .controller('MapCtrl', function ($scope, $location, $stateParams) {

        $scope.baseURL = '/external/render';

        $scope.mapParams = angular.copy($stateParams);

        $scope.$watch('mapParams', function(newValue) {
            $location.search(newValue);
        });
    });
