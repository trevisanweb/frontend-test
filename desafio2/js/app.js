var App = angular.module('App', [
  'ngRoute',
  'App.controllers',
  'App.directives'
])

.config(function($routeProvider) {
        $routeProvider

        // Page Signup
        .when('/', {
            templateUrl : 'views/signup.html',
            controller  : 'signupController'
        })

        // route for the about page
        .when('/home', {
            templateUrl : 'views/painel.html',
            controller  : 'homeController'
        })
});



