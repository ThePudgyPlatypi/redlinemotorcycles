app.directive("expServices", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        },
        templateUrl: "views/partials/_expServices.html"
    }
});