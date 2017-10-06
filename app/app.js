var app = angular.module("mainApp", ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when("/",
        {
            templateUrl:'app/views/home.html',
            controller:'homeCtrl'
        })
        .when("/about",
        {
            templateUrl:'app/views/about.html',
            controller:'aboutCtrl'
        })
        .when("/contact",
        {
            templateUrl:'app/views/contact.html',
            controller: 'contactCtrl'
        })
        .otherwise({ redirectTo: '/' })
});
