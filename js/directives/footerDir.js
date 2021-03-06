app.directive("footerView", ["$window", "$q", function($window, $q) {
    return {
        restrict: 'E',
        scope: {
            info: "=",
            links: "=",
            address: "="
        },
        link: function (scope, element, attrs) { 
            function load_script() {
                var s = document.createElement('script'); // use global document since Angular's $document is weak
                s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAbia3vA2GFk8iiJz8XQZtNcsRaUX8W_I8&callback=initMap";
                document.body.appendChild(s);
            }
            function lazyLoadApi(key) {
                var deferred = $q.defer();
                $window.initialize = function () {
                    deferred.resolve();
                };
                // thanks to Emil Stenström: http://friendlybit.com/js/lazy-loading-asyncronous-javascript/
                if ($window.attachEvent) {  
                    $window.attachEvent('onload', load_script); 
                } else {
                    $window.addEventListener('load', load_script, false);
                }
                return deferred.promise;
            }
            
            if ($window.google && $window.google.maps) {
                console.log('gmaps already loaded');
            } else {
                lazyLoadApi().then(function () {
                    console.log('promise resolved');
                    if ($window.google && $window.google.maps) {
                        console.log('gmaps loaded');
                    } else {
                        console.log('gmaps not loaded');
                    }
                }, function () {
                    console.log('promise rejected');
                });
            }
        },
        templateUrl: "views/partials/_footer.html"
    };
}]);