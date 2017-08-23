// Angular Code
var app = angular.module("main", ["ngRoute"]);
var token = "4033162559.73c7dce.c39e3a13d1284ecdb809ea6322a0718e";
var count = 15;
var instaUrl = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + token + "&count=" + count;
var colors = ["#181818", "#aeadae", "#a71e22", "#464647"];

app.config(function($routeProvider, $sceDelegateProvider) {
    $routeProvider.when("/", {
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
    });
    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        instaUrl
    ]);
});

// facebook API
//app.run(['$rootScope', '$window', function($rootScope, $window) {
//  $rootScope.user = {};
//    $window.fbAsyncInit = function() {
//        FB.init({ 
//            appId: '1131275933639244',
//            channelUrl: 'views/channel.html',
//            status: true, 
//            cookie: true, 
//            xfbml: true,
//            version: 'v2.4'
//        });
//    };
//
//    (function(d){
//        // load the Facebook javascript SDK
//        var js,
//        id = 'facebook-jssdk',
//        ref = d.getElementsByTagName('script')[0];
//        if (d.getElementById(id)) {
//            return;
//        }
//        js = d.createElement('script');
//        js.id = id;
//        js.async = true;
//        js.src = "//connect.facebook.net/en_US/sdk.js";
//        ref.parentNode.insertBefore(js, ref);
//    }(document));
//}]);

// Foundation
$(document).foundation();


// jQuery 
$(function() {
    //        extend navBar
    $("body").click(function(e) {
        // if the circle doesnt class activeNav
        if(!$(".navCircle").hasClass("active")) {      
            // add active class and scaledown
            $(".navCircle").addClass("active navCircleScaleDown");  
            // animate the width
            $(".redBar").animate({
                width: "100%"
            }, 300, "easeOutQuint");    
             // add solidNav for no opacity
//            $(".nav").addClass("solidNav");                  
            $(".navCircle").removeClass("navCircleLeft");
            $(".navLink").css("opacity", "1");
            // else if active is there
        } else if ($(".navCircle").hasClass("active")) { 
            // retract the animation
            $(".redBar").animate({
                width: "3%"
            }, 300, "easeOutQuint"); 
            // remove active state/navCircle
            $(".navCircle").removeClass("active navCircleScaleDown"); 
            $(".navCircle").addClass("navCircleLeft");
            $(".navLink").css("opacity", "0");
//            setTimeout(function(){ 
//                $(".nav").removeClass("solidNav"); 
//            }, 1500);
        }
    });
//    var gridImg = document.getElementsByClassName("grid-img");
//    var mediaOverlay = document.getElementsByClassName("mediaImgOverlay");
//    
//    console.log(gridImg.length);
//    for(var i = 0; i < gridImg.length; i++) {
//        var ran = 
//        var color = colors[ran];
//        alert(color);
//        $(mediaOverlay[i]).css("background-color", color);
//    };
//    console.log(getRandomColor(0, colors.length));
});


//--------------------------------------------------
//function definitions

//home "onLoad" calls
function homeOnLoad() {
    parallax($(".fullHeaderContainer"), 1.7);
    animatedRedlineLogo();
    
    $(function() {
        $("#flexsliderOne").flexslider({
            animation: "slide",
            slideshow: true,
            slideshowSpeed: 5000,
            animationSpeed: 1500,
            animationLoop: true,
            pauseOnAction: true,
            pauseOnHover: true,
            useCSS: false,
            touch: true,
            easing: "easeInOutBack",
            controlNav: false
        });

         $("#flexsliderTwo").flexslider({
            animation: "slide",
            slideshow: true,
            slideshowSpeed: 0,
            animationSpeed: 7000,
            animationLoop: true,
            useCSS: false,
            touch: true,
            easing: "linear",
            controlNav: false,
            itemWidth: 400, 
            directionNav: false
        });
    });
    
    initMap();
}


function animatedRedlineLogo() {
    var homeIframe = $("#animatedRedlineLogo");
    var homeIframeData = homeIframe.data("src");
    $(window).scrollStopped(function() {
        if (homeIframe.isOnScreen()){
            homeIframe.prop('src', homeIframeData);
        };
    });
}    

// Parallax coding
// called in controllers since it needs to be called when views are loaded
function parallax(element, intensity) {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var pos = scrollTop / intensity + "px";
        element.css("transform", "translateY(" + pos +")");
    })
}

// viewport function 
$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left ||
              viewport.left > bounds.right ||
              viewport.bottom < bounds.top ||
              viewport.top > bounds.bottom));
}

// function to see if an element has appeared on screen before
$.fn.scrollStopped = function(callback) {
    var fired = 0;
    $(this).scroll(function(){
        if(fired == 0) {
            var self = this, $this = $(self);
            if ($this.data('scrollTimeout')) {
              clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback,250,self));
            fired = 1;
        };
    });
};

//google maps api
function initMap() {
    var redlineMap = {lat: 39.867066, lng: -74.732856};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: redlineMap,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#040707'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'},{visibility: 'hidden'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#A71E24'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#B26C6F'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#A71E24'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    });
    var marker = new google.maps.Marker({
        position: redlineMap,
        map: map
    });
}