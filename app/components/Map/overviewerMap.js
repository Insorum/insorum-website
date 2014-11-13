'use strict';

/**
 * @ngdoc directive
 * @name InsorumWebsiteApp.directive.overviewerMap
 * @description
 * # overviewerMap
 * Directive in the InsorumWebsite.
 */
angular.module('InsorumWebsiteApp')
    .directive('overviewerMap', function ($interval) {
        return {
            templateUrl: '/components/Map/OverviewerMap.html',
            scope: {
                baseUrl: '=',
                mapParams: '='
            },
            restrict: 'E',
            link: function postLink(scope, element) {
                var coordsArray = [];

                coordsArray.push(scope.mapParams.x || 0);
                coordsArray.push(scope.mapParams.y || 0);
                coordsArray.push(scope.mapParams.z || 0);
                coordsArray.push(scope.mapParams.zoom || 0);
                coordsArray.push(scope.mapParams.world || 0);
                coordsArray.push(scope.mapParams.mapType || 0);

                var iframe = element.find('iframe')[0];
                iframe.src = scope.baseUrl + '/#/' + coordsArray.join('/');

                // TODO digest loop doesnt seem to run to update the watcher if we dont force it
                $interval(function(){}, 1000);

                iframe.onload = function() {
                    scope.location = iframe.contentWindow.location;
                };

                scope.$watch('location.hash', function(newValue) {
                    if(!newValue || newValue.length === 0) {
                        return;
                    }

                    //check existance of the hashslash
                    if(newValue.slice(0, 2) !== '#/') {
                        return;
                    }

                    //remove the hash and split around the / signs
                    var parts = newValue.slice(2).split('/');

                    if(parts.length !== 6) {
                        return;
                    }

                    scope.mapParams = {
                        x: parts[0],
                        y: parts[1],
                        z: parts[2],
                        zoom: parts[3],
                        world: parts[4],
                        mapType: parts[5]
                    };
                });
            }
        };
    });
