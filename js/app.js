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
    }).when("/media", {
       controller: "MediaController",
       templateUrl: "views/media.html"
    }).when("/careers", {
        controller: "TeamController",
        templateUrl: "views/careers.html"
    }).otherwise({
       redirectTo: "/"
    });
    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self', instaUrl
    ]);
});

app.run(function($rootScope, $location, $anchorScroll) {
  //when the route is changed scroll to the proper element.
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    if($location.hash()) $anchorScroll();  
  });
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
});


//--------------------------------------------------
//function definitions

//home "onLoad" calls
function homeOnLoad() {
    parallax($(".fullHeaderContainer"), 2);
    parallax($(".fullHeaderImgOverlayContainer"), 1.5);
    animatedRedlineLogo();
    
    $(function() {
        $("#bikeSlider").slick({
            centerMode: true,
            lazyLoad: "ondemand",
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            swipe: true,
            cssEase: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        });
        
        $("#brandSlider").slick({
            arrows: false,
            infinite: true,
            variableWidth: true,
            lazyLoad: "ondemand",
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 1000,
        });
    });
    
}

function mediaOnLoad() {
    parallax($(".fullHeaderImg"), 2);
    parallax($(".fullHeaderImgOverlayContainer"), 1.5);
}

function serviceOnLoad() {
    parallax($(".fullHeaderImg"), 2);
    parallax($(".fullHeaderImgOverlayContainer"), 1.5);
    
    function clickOpen() {
        $("#indexContainer").addClass("active").animate({
            right: 0
        }, 300, "easeOutQuint");
    }

    function clickClose() {
        console.log("time delay events removed");
        $("#indexContainer").removeClass("active").animate({
            right: "-" + 45 + "%"
        }, 300, "easeOutQuint");
        $("body").off("click", clickClose);
        $(window).off("scroll", clickClose);
    }
    
    
    $("#indexContainer").on("click", function() {
        console.log("click");
        if(!$("#indexContainer").hasClass("active")) {
            clickOpen();
            setTimeout(function() {
                $("body").on("click", clickClose);
                $(window).on("scroll", clickClose);
                console.log("time delay events set");
            }, 1);
            
        } else if ($("#indexContainer").hasClass("active")) {
            clickClose();
        }
    });
}

function teamOnLoad() {
    parallax($(".fullHeaderImg"), 1.7);
    parallax($(".fullHeaderImgOverlayContainer"), 1.3);
    parallax($(".ownerRight"), 4);
    parallax($(".ownerLeft"), 4);
}


function animatedRedlineLogo() {
    var homeIframe = $("#animatedRedlineLogo");
    var homeIframeData = homeIframe.data("src");
    $(window).scrollInViewOnce(function() {
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
$.fn.isOnScreen = function() {
    
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
$.fn.scrollInViewOnce = function(callback) {
    var fired = 0;
    $(this).scroll(function(){
        if(fired == 0) {
            var self = this, $this = $(self);
            if ($this.data('scrollTimeout')) {
              clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback,150,self));
            fired = 1;
        };
    });
}

// same function as above without the counter
// this will launch a function once scrolling stops with a delay
$.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function(){
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
          clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
}

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

