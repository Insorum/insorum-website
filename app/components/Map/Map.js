'use strict';

/**
 * @ngdoc function
 * @name InsorumWebsiteApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller in InsorumWebsite
 */
angular.module('InsorumWebsiteApp')
    .controller('MapCtrl', function ($scope, $location) {

        $scope.baseURL = '/external/render';

        $scope.currentCoords = $location.search();

        // when the URL changes we want to update the map to show the new coordinates
        $scope.$on('$locationChangeSuccess', function() {
            // don't cause loops, skip if coords are already set
            if(angular.equals($scope.currentCoords, $location.search())) {
                return;
            }

            $scope.currentCoords = $location.search();
        });

        // called when the map updates coordinates, we want to update the URL to reflect it
        $scope.onUpdate = function(params) {
            // dont cause loops, if the URL is already set, skip it
            if(angular.equals(params, $location.search())) {
                return;
            }

            $location.search(params);
        };
    });
