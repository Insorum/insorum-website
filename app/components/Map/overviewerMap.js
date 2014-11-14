'use strict';

/**
 * @ngdoc directive
 * @name InsorumWebsiteApp.directive.overviewerMap
 * @description
 * # overviewerMap
 * Directive in the InsorumWebsite.
 */
angular.module('InsorumWebsiteApp')
    .directive('overviewerMap', function () {
        return {
            templateUrl: '/components/Map/OverviewerMap.html',
            scope: {
                baseUrl: '=',
                currentCoords: '=',
                onUpdate: '='
            },
            restrict: 'E',
            link: function postLink(scope, element) {

                /**
                 * Generates a hash for the overviewer map URL
                 *
                 * @param params
                 * @returns {string}
                 */
                var generateHashFromParams = function(params) {
                    var coordsArray = [];

                    coordsArray.push(params.x || 0);
                    coordsArray.push(params.y || 0);
                    coordsArray.push(params.z || 0);
                    coordsArray.push(params.zoom || 0);
                    coordsArray.push(params.world || 0);
                    coordsArray.push(params.mapType || 0);

                    return '/' + coordsArray.join('/');
                };

                /**
                 * Update our coordinates from the overviewer map hash
                 */
                var updateHash = function() {
                    var newValue = childWindow.location.hash;
                    if(newValue.slice(0, 2) !== '#/') {
                        return;
                    }

                    //remove the hash and split around the / signs
                    var parts = newValue.slice(2).split('/');

                    if(parts.length !== 6) {
                        return;
                    }

                    //needs to run in an $apply to make sure digest runs
                    scope.$apply(function() {
                        scope.currentCoords = {
                            x: parts[0],
                            y: parts[1],
                            z: parts[2],
                            zoom: parts[3],
                            world: parts[4],
                            mapType: parts[5]
                        };

                        //call the trigger method to avoid need for a watcher
                        scope.onUpdate(scope.currentCoords);
                    });
                };

                var iframe = element.find('iframe')[0];

                // need to set the inital data from the given coords
                iframe.src = scope.baseUrl + '/#' + generateHashFromParams(scope.currentCoords);

                var childWindow = iframe.contentWindow;

                // when the iframe loads we want to register a listener for when it's hash updates so we can pull the new coordinates in
                iframe.onload = function() {
                    childWindow.$(childWindow).on('hashchange', updateHash);
                };

                scope.$watch('currentCoords', function(newValue) {
                    var hash = generateHashFromParams(newValue);

                    // we don't want to set the hash if its equal to avoid loops
                    if(angular.equals('#' + hash, childWindow.location.hash)) {
                        return;
                    }

                    //update map URL to update viewport
                    childWindow.location.hash = hash;
                });
            }
        };
    });
