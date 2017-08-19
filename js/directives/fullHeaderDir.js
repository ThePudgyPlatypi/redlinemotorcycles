app.directive("fullHeader", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        },
        templateUrl: "views/partials/_fullHeader.html"
    }
});