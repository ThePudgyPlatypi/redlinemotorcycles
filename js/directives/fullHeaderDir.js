app.directive("fullHeader", function() {
    return {
        restrict: "E",
        scope: {
            headerInfo: "="
        },
        templateUrl: "views/partials/_fullHeader.html"
    }
});