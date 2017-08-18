app.directive("footerView", function() {
    return {
        restrict: "E",
        scope: {
            templateInfo: "="
        },
        templateUrl: "views/partials/_footer.html"
    }
});