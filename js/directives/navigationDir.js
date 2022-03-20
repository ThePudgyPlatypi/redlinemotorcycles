app.directive("navigation", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        }, 
        templateUrl: "views/partials/_navigation.html"
    }
});