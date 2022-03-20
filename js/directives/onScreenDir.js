app.directive("onScreen", function() {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var homeIframe = $(elem);
            var homeIframeData = homeIframe.data("src");
            $(window).scrollInViewOnce(function() {
                if (homeIframe.isOnScreen()){
                    homeIframe.prop('src', homeIframeData);
                };
            });
        }
    }
})