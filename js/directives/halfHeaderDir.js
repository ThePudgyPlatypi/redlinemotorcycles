app.directive("halfHeader", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        },
        templateUrl: "views/partials/_halfHeader.html"
    }
});