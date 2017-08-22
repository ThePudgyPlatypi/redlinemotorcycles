app.directive("card", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        },
        templateUrl: "views/partials/_card.html"
    }
});