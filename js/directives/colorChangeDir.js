app.directive("colorChange", ["$timeout", function($timeout) {
    var def = {
        restrict: "A",
        terminal: true,
        transclude: false,
        link: function(scope, elem, attrs) {
            $timeout(scope.$eval(attrs.colorChange), 0);
        }
    };
    
    return def;
    
    //this is all so that it does this after the directive is rendered. Not sure exactly how this all works yet since I dunno enough about angular. Fiddle is here: https://jsfiddle.net/gsferreira/h53okjtu/
}]);