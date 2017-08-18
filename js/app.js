var app = angular.module("main", ["ngRoute"]);


app.config(function($routeProvider) {
   $routeProvider
   .when("/", {
       controller: "HomeController",
       templateUrl: "views/home.html"
   }).when("/services", {
       controller: "ServiceController",
       templateUrl: "views/service.html"
   }).when("/team", {
       controller: "TeamController",
       templateUrl: "views/team.html"
   })
   .otherwise({
       redirectTo: "/"
   })
});

$(document).foundation();

$(function() {
    $(".navCircle").on("click", function() {
        $(".redBar").css("width", "100%");
    });
});