app.directive("media", function() {
    return {
        restrict: "E",
        scope: {
            info: "=",
            color: "="
        },
        templateUrl: "views/partials/_media.html"
    };
})