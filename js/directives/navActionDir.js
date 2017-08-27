app.directive("navAction", ["$window", function($window) {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var windowWidth = $window.innerWidth;
            var navCircle = $(elem);
//            var windowWidth = $window.innerWidth;
            //Desktop
            //navOpen: on click it opens up
            //navClose: click anywhere on the body and it closes or if you scroll
            
            function navOpen() {
                // add active class and scaledown
                navCircle.addClass("active navCircleScaleDown"); 
                // animate the width
                $(".redBar").animate({
                    width: "100%"
                }, 300, "easeOutQuint");
                // add any opacity the nav has lost
                $(".navLink").css("opacity", "1");
                //adding other listeners with slight delay so it
                //doesnt fire right away
                setTimeout(function() {
                    $("body").on("click", navClose);
                    $(window).on("scroll", navClose);
                }, 1);
            }
            
            function navClose() {
                // retract the animation
                $(".redBar").animate({
                    width: "40px"
                }, 300, "easeOutQuint"); 
                //remove active class and navCircle scale change
                $(".navCircle").removeClass("active navCircleScaleDown");
                // add any opacity the nav has lost
                $(".navLink").css("opacity", "0");
                //removing event listeners
                navCircle.off("click", navCircle, navClose);
                $("body").off("click", navClose);
                $(window).off("scroll", navClose);
            }
            
            
            
            //mobile
            //mobileNavInit: starts in normal desktop "out" mode 
            //mobileIdle: on scroll in shrinks off to the side and becomes opaque. stays opaque until clicked on 
            //mobileScrollUp: if you scroll up it becomes visible and pops out
            //mobilePause: if you stop scrolling it stays solid for a bit then shrinks back, beomces opaqu again
            //mobileOpen: if you click it it displays the nav items
            //mobileClose: if you click on the body or navCircle and the nav is extended it disappears if you scroll and the nav is extended it shrinks back to the scrollUp state and waits until scrolling stops, pauses then shrinks to the idle state
            
            function mobileNavInit() {
                
            }
            
            function mobileIdle() {
                
            }
            
            function mobileScrollUp() {
                
            }
            
            function mobileClose() {
                
            }
            
            // firing functions 
            if (windowWidth > 768) {
                navCircle.click(function(e) {
                    // if the circle doesnt class activeNav
                    if(!navCircle.hasClass("active")) {      
                        navOpen();
                    } else if ($(".navCircle").hasClass("active")) { 
                        navClose();
                    }
                })
            } else {
                
            }
        }
    }
}]);