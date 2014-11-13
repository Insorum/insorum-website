'use strict';

angular.module('InsorumWebsiteApp', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/Homepage/Homepage.html',
                controller: 'HomepageCtrl'
            })

            .state('map', {
                url: '/map?x&y&z&zoom&world&maptype',
                templateUrl: 'components/Map/Map.html',
                controller: 'MapCtrl',
                reloadOnSearch: false
            })

            .state('whitelist', {
                url: '/whitelist',
                templateUrl: 'components/Whitelist/Whitelist.html',
                controller: 'WhitelistCtrl'
            });
    });
