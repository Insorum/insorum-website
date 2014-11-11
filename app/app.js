'use strict';

angular.module('InsorumWebsiteApp', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/Homepage/Homepage.html',
                controller: 'HomepageCtrl'
            });
    });
