var App = angular.module('App', [
  'ngRoute',
  'App.controllers',
  'App.directives'
])

.config(function($routeProvider) {
        $routeProvider

        // Page Signup
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'homeController'
        })

});



