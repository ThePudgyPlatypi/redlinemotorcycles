app.directive("navigation", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        }, 
        link: function(scope, elem, attrs) {
             //        extend navBar
            $(elem).load(function() {
                $(".redBar").animate({
                        width: "100%"
                    }, 300, "easeOutQuint");  
            });
            
            $(elem).click(function(e) {
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
            })
        },
        templateUrl: "views/partials/_navigation.html"
    }
});