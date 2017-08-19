// Angular Code
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
   }).when("/blog", {
       controller: "BlogController",
       templateUrl: "views/blog.html"
   })
   .otherwise({
       redirectTo: "/"
   })
});


// Foundation
$(document).foundation();


// jQuery 
$(function() {
    $("body").click(function(e) { //        extend navBar
        if(!$(".navCircle").hasClass("active")) { // if the circle doesnt class activeNav
            $(".navCircle").addClass("active navCircleScaleDown"); // add active class and scaledown
            $(".redBar").animate({
                width: "100%"
            }, 300, "easeOutQuint"); // animate the width
//            $(".nav").addClass("solidNav"); // add solidNav for no opacity
            $(".navCircle").removeClass("navCircleLeft");
            $(".navLink").css("opacity", "1");
        } else if ($(".navCircle").hasClass("active")) { // else if active is there
            $(".redBar").animate({
                width: "3%"
            }, 300, "easeOutQuint"); // retract the animation
            $(".navCircle").removeClass("active navCircleScaleDown"); // remove active state/navCircle
            $(".navCircle").addClass("navCircleLeft");
            $(".navLink").css("opacity", "0");
//            setTimeout(function(){ 
//                $(".nav").removeClass("solidNav"); 
//            }, 1500);
        }
    });
});

//function mouseOverNav() {
//    $(".navCircle").removeClass("navCircleLeft"); 
//    $(".nav").addClass("solidNav");
//}
//
//function mouseOutNav() {
//    $(".navCircle").addClass("navCircleLeft"); // add class to bring circle left
//    $(".nav").removeClass("solidNav"); // add opacity
//}

