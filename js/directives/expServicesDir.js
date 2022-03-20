app.directive("expServices", function() {
    return {
        restrict: "E",
        scope: {
            info: "=",
            responsive: "="
        },
        templateUrl: "views/partials/_expServices.html"
    }
});