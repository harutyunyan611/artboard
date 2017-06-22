var app = angular.module("protectme", ["ngRoute",'ngResource']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/messages", {
        templateUrl : "http://res.cloudinary.com/harutyunyan611/raw/upload/v1498167922/messages_bxcnny.html"
        
    })
    .when("/messages-:tab", {
        templateUrl : "http://res.cloudinary.com/harutyunyan611/raw/upload/v1498167922/messages_bxcnny.html"
        
    })
    .when("/contacts", {  
        templateUrl : "http://res.cloudinary.com/harutyunyan611/raw/upload/v1498168557/contact_agzr4a.html"
    })
    .otherwise({
        redirectTo: '/messages'
    });
});
angular.module('protectme').config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['**']);
});
