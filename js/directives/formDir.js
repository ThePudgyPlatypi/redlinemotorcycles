app.directive("contact", function() {
    return {
        restrict: "E",
        scope: {
            info: "="
        },
        templateUrl: "views/partials/_contactForm.html",
    }
})