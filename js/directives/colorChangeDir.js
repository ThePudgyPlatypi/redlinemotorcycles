app.directive("colorChange", function() {
    return {
        restrict: "EA",
        link: function(scope, element, attr) {
            var colors = [
                "rgba(24, 24, 24, 0.6)",
                "rgba(174, 173, 174, 0.6)",
                "rgba(167, 30, 34, 0.6)",
                "rgba(70, 70, 71, 0.6)"];
            var colorPicked;
            
            var init = function() {
                var random = Math.floor(Math.random() * (3 - 0)) + 0;
                colorPicked = colors[random];
                elem.css("background-color", colorPicked);
                return colorPicked
            }
            
            scope.$watch(
                function() {
                    return colorPicked;
                },
                function() {
                    init();
                }
            );
            
            scope.$digest();
        }
    }
})